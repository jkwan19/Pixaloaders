import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Item from './Item';

export default function ImageList({ images }) {

  const renderImage = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => console.log('pressed')}
      />
    )
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={(image) => image.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  search: {
    height: 50,

  }
});
