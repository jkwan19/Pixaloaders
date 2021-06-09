import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

import Detail from '../components/Detail';


export default function ImageDetails({ route, navigation }) {

  const {
    tags,
    user,
    userImageURL,
  } = route.params.data;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.userImage}
        imageStyle={styles.roundAvatar}
        source={{uri: userImageURL}}
        />
      <Detail
        type='User'
        info={user}
        />
      <Detail
        type='Tags'
        info={tags}
        />
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
  roundAvatar: {
    borderRadius: 50,
    borderWidth: 1,
  },
  userImage:{
    resizeMode:'contain',
    minWidth: 100,
    minHeight: 100,
    margin: 10
  },
});


