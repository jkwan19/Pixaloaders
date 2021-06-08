import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function SearchBar() {

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search images"
        onChangetext={text => setText(text)}
        defaultValue={text}
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
