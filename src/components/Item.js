import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

export default function Item ({ item, onPress }) {

  const {
    previewURL
  } = item;

  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={{uri: previewURL}}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'transparent',
    width: 60,
    height: 60
  }
});