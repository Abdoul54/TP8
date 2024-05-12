import { useState } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";

const GeolocationScreen = () => {
  const [region, setRegion] = useState({
    latitude: 33.7025319,
    longitude: -7.3987359,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [markers, setMarkers] = useState([
    {
      latlng: {
        latitude: 33.7025319,
        longitude: -7.387359,
      },
      title: "Initial",
      description: "Initial Position",
    },
  ]);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    let newMarker = {
      latlng: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      title: "Current Location",
      description: "Your current position",
    };

    setMarkers([...markers, newMarker]);
    setRegion({
      ...region,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  onTakePosition = (region) => {
    const newMarker = {
      latlng: {
        latitude: region.nativeEvent.coordinate.latitude,
        longitude: region.nativeEvent.coordinate.longitude,
      },
      title: "Custom Marker", // You can customize this title
      description: "Added on tap", // You can customize this description
    };

    setMarkers([...markers, newMarker]);
    setRegion({ ...region }); // Update region if needed (optional)
  };

  return (
    <View style={{ padding: 10 }}>
      <Button title="Get Position" onPress={() => getLocation()} />
      <Text style={{ padding: 10, margin: 10, fontSize: 20 }}>
        Longitude : {region.longitude}
      </Text>
      <Text style={{ padding: 10, margin: 10, fontSize: 20 }}>
        Latitude : {region.latitude}
      </Text>
      <MapView
        style={styles.mapStyle}
        region={region}
        onPress={() => onTakePosition}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default GeolocationScreen;
