import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default function ImageDetails({ route, navigation }) {

  const {
    tags,
    previewURL,
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
      <View style={styles.imageContainer}>
        <Image
          styles={styles.image}
          source={webformatURL}
          />
      </View>
      <View style={styles.user}>
        <Image
          styles={styles.userImage}
          source={{uri: userImageURL}}
          />
      </View>
      <Text>Tags: {tags}</Text>
      <Text>User: {user}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 100,
    width: 100,
  },
  imageContainer: {
    minHeight: 100,
    minWidth: 100
  },
  user: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    height: 100,
    width: 100
  },
  userImage:{
    resizeMode:'contain',
    minWidth: 100,
    minHeight: 100,
  }
});


