import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Image,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const WeatherScreen = ({ route }) => {
  const { city } = route.params;
  const [weatherData, setWeatherData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchWeatherData(city);
    setRefreshing(false);
  };

  if (!city) {
    useNavigation().navigate("Search");
    return null;
  }

  const fetchWeatherData = async (city) => {
    try {
      const apiKey = process.env.EXPO_PUBLIC_OPENWEATHERMAP_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = { weekday: "long", hour: "numeric", minute: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  if (!weatherData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Forecast for {city}</Text>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {weatherData.list.map((forecast, index) => (
          <View key={index} style={styles.forecastCard}>
            <Text style={styles.dateText}>{formatDate(forecast.dt_txt)}</Text>
            <Text style={styles.tempText}>
              Temperature: {forecast.main.temp}°C
            </Text>
            <View style={styles.weatherDetails}>
              <Image
                source={{
                  uri: `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`,
                }}
                style={styles.weatherIcon}
              />
              <Text style={styles.descriptionText}>
                {forecast.weather[0].description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  scrollView: {
    flexGrow: 1,
  },
  forecastCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  tempText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  weatherDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  descriptionText: {
    fontSize: 16,
  },
});

export default WeatherScreen;
