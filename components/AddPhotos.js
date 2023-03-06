import { Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Entypo from 'react-native-vector-icons/Entypo'
import Header from './Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import constants from '../global';

export default function AddPhotos(props) {
  const {images, setImages} = props;

  const styles = StyleSheet.create({
    box: {
      width: constants.width,
      height: 200,
      borderRadius: 55,
      borderStyle: 'dashed',
      borderWidth: 3,
      borderColor: '#2846c4',
      backgroundColor: "#181818",
      margin: 20,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: constants.width,
      height: constants.width,
      borderRadius: 18,
    },
    imagesScroll: {
      width: constants.width,
      height: constants.width,
      margin: 20,
      borderRadius: 18,
      display: 'flex'
    },
    iconWrapper: {
      backgroundColor: "#181818",
      padding: 8,
      borderRadius: 15,
      position: 'absolute',
      left: constants.width-25,
      zIndex: 9999,
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#000',  
      shadowOpacity: 0.3,  
      shadowRadius: 3, 
    },
    icon: {
      fontSize: 20,
    }
  })

  const removeImage = index => {
    setImages(images.filter((_, i) => i !== index))
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      orderedSelection: true,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  const renderImages = () => {
    return(
      images.map((image, i) => {
        return (
          <View key={i}>
            <Image source={{ uri: image.uri }} style={styles.image} />
            <TouchableOpacity  style={[styles.iconWrapper, {top: 5, left: constants.width-52}]} activeOpacity={.8} onPress={() => removeImage(i)}>
              <Entypo  name='cross' color='#f1f1f1' style={styles.icon} />
            </TouchableOpacity>
          </View>
        );
      })
    )
  }

  return (
    images.length === 0 ?
    <TouchableOpacity activeOpacity={.8} style={styles.box} onPress={pickImage}>
      <Entypo name='plus' size={60} style={{color: '#848484'}}/>
      <Header size={20} color='#848484' weight='500'>Choose From Library</Header>
    </TouchableOpacity>

    :
    <>
      <ScrollView horizontal={true} style={styles.imagesScroll} bounces={false} pagingEnabled={true}>
        {renderImages()}
      </ScrollView>
      <TouchableOpacity style={[styles.iconWrapper, {top: 210 + constants.width}]} activeOpacity={.8} onPress={pickImage}>
        <MaterialIcons name='edit' color='#f1f1f1' style={styles.icon} />
      </TouchableOpacity>
    </>
  );
}