import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

export default function SearchBar({ handleSearch }) {

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search images"
        onChangeText={text => setText(text)}
        onSubmitEditing={() => handleSearch(text)}
        textAlign='center'
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  search: {
    height: 50,
    width: '100%',
    backgroundColor: '#ebebeb',
    borderRadius: 10,
  }
});
