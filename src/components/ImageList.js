import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Item from './Item';

export default function ImageList({ images, navigation }) {

  const renderImage = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate('Details', { data: item })
        }}
      />
    )
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={(image) => image.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%'
  }
});
