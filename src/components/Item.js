import React, { useState } from "react";
import {
  Image,
  StyleSheet,
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
    width: 120,
    height: 120,
    margin: 2,
    borderWidth: 2,
    borderColor: '#42412e'
  }
});