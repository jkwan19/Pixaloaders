import React, {
  useState,
  useEffect
} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import axios from 'axios';

import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';

const key = '21984056-5fd06a8903b007e3e63524768';

export default function Home({ navigation }) {

  const [images, setImages] = useState([]);

  const handleSearch = (input) => {
    if (!input) {
      setImages([]);
      return;
    };

    axios.get(`https://pixabay.com/api/?key=${key}`, {
      params:{
        q: input,
        image_type: 'photo'
      }
    })
      .then((res) => {
        setImages(res.data.hits)
      })
  }


  return (
    <View style={styles.container}>
      <SearchBar handleSearch={handleSearch}/>

      <ImageList images={images} navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


