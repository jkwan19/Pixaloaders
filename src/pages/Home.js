import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import SearchBar from '../components/SearchBar';

const key = process.env.API_KEY;

export default function Home() {

  const handleSearch = (search) => {
    axios.get(`https://pixabay.com/api/`, {
      params:{
        key,
        q: search,
        image_type: 'photo'
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
});
