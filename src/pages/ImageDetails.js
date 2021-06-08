import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default function ImageDetails({ route, navigation }) {

  const {
    tags,
    largeImageURL,
    views,
    downloads,
    favorites,
    likes,
    comments,
    user,
    userImageURL,
    webformatURL
  } = route.params.data;

  return (
    <View style={styles.container}>
      <Image
        styles={styles.image}
        source={{uri: webformatURL}}
        />
      <Text>Tags: {tags}</Text>
      <Text>User: {user}</Text>
      <Image
        styles={styles.userImage}
        source={{uri: userImageURL}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    backgroundColor: 'black',
    resizeMode: 'cover',
    height: 100,
    width: 100,
  },
  userImage:{
    backgroundColor: 'black',
    resizeMode: 'cover',
    height: 100,
    width: 100
  }
});


