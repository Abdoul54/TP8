import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const [city, setCity] = useState("");
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("Weather", { city: city });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          marginBottom: 10,
          width: 200,
        }}
        placeholder="Enter city"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchScreen;
