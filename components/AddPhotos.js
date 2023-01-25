import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Entypo from 'react-native-vector-icons/Entypo'
import Header from './Header';

const width = (Dimensions.get('window').width * 0.85) + 4

export default function AddPhotos(props) {

  const {images, setImages} = props;

  const styles = StyleSheet.create({
    box: {
      width: width,
      height: 200,
      borderRadius: 55,
      borderStyle: 'dashed',
      borderWidth: 3,
      borderColor: '#2846c4',
      backgroundColor: "#181818",
      margin: 10,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: width,
      height: images != null ? images[0].height * (width / images[0].width) : 0,
      margin: 10,
      borderRadius: 18,
      height: 300,
    },
    imagesScroll: {
      width: width,
      height: 300,
      margin: 20,
      borderRadius: 18
    }
  })

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      orderedSelection: true,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImages(result.selected);
    }
  };

  const renderImages = () => {
    return(
      images.map((image, i) => {
        return( <Image source={{ uri: image.uri }} style={styles.image} key={i} /> );
      })
    )
  }

  return (
    images === null ?
    <TouchableOpacity activeOpacity={.8} style={styles.box} onPress={pickImage}>
      <Entypo name='plus' size={60} style={{color: '#848484'}}/>
      <Header size={20} color='#848484' weight='500'>Choose From Library</Header>
    </TouchableOpacity>

    :
    <ScrollView horizontal={true} style={styles.imagesScroll} contentContainerStyle={{alignItems: 'center'}}>
      {renderImages()}
    </ScrollView>
  );
}