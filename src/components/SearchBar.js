import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default function SearchBar({ handleSearch }) {

  const [text, setText] = useState('');

  useEffect(() => {
    handleSearch(text);
  }, [text])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search images"
        onChangeText={text => setText(text)}
        value={text}
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
