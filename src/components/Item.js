import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

export default function Item ({ item, onPress}) {

  const {
    previewURL
  } = item;

  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{
          height: '40px'
        }}
        source={previewURL}
      />
    </TouchableOpacity>
    )

}