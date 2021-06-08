import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default function ImageDetails({ route, navigation }) {

  const {
    tags,
    user,
    userImageURL,
  } = route.params.data;

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <ImageBackground
          style={styles.userImage}
          source={{uri: userImageURL}}
          accessible={true}
          />
      </View>
      <Text>User: {user}</Text>
      <Text>Tags: {tags}</Text>
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
  user: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  userImage:{
    resizeMode:'contain',
    minWidth: 100,
    minHeight: 100,
  },
  img: {
    position: 'relative'
  }
});


