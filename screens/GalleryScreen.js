import React, { useState, useEffect } from "react";
import { View, FlatList, Image, StyleSheet, Button } from "react-native";
import * as MediaLibrary from "expo-media-library";

function GalleryScreen({ navigation }) {
  const [capturedPhotos, setCapturedPhotos] = useState([]);

  useEffect(() => {
    loadCapturedPhotos();
  }, []);

  const loadCapturedPhotos = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") return;

      const media = await MediaLibrary.getAssetsAsync({
        mediaType: "photo",
        first: 100, // Adjust limit as needed
      });

      setCapturedPhotos(media.assets);
    } catch (error) {
      console.error("Error loading photos:", error);
    }
  };

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.uri }} style={styles.galleryImage} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={capturedPhotos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        horizontal={false}
        style={styles.gallery}
      />
      <Button title="Back to Camera" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  gallery: {
    flex: 1,
    marginTop: 10,
  },
  galleryImage: {
    width: "33%",
    height: 100,
    margin: 1,
  },
});

export default GalleryScreen;
