// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
// import { useState } from 'react';


// export default function AddPhotos() {
//     const [image, setImage] = useState("");
//     const [uploading, setUploading] = useState(false);
//     const [transferred, setTransferred] = useState(0);


//     const styles = StyleSheet.create({
//         container: {
//         flex: 1,
//         padding: 30,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#fff'
//         },
//         button: {
//         width: 250,
//         height: 60,
//         backgroundColor: '#3740ff',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 4,
//         marginBottom:12
//         },
//         buttonText: {
//         textAlign: 'center',
//         fontSize: 15,
//         color: '#fff'
//         }
//     });
    
//     const selectImage = async () => {
//         // const {granted } = await Permissions.

//         const options = {
//           maxWidth: 2000,
//           maxHeight: 2000,
//           storageOptions: {
//             skipBackup: true,
//             path: 'images'
//           }
//         };
//         launchImageLibrary(options, response => {
//           if (response.didCancel) {
//             console.log('User cancelled image picker');
//           } else if (response.errorCode) {
//             console.log('ImagePicker Error: ', response.errorCode);
//           } else if (response.errorMessage) {
//             console.log('User tapped custom button: ', response.errorMessage);
//           } else {
//             console.log(response)
//             const source = { uri: response?.uri };
//             console.log(source);
//             setImage(source);
//           }
//         });
//     };


//     // const options = {
//     //     mediaType: 'photo'
//     // }

//     // launchImageLibrary(options, response => {
//     //   if (response.didCancel) {
//     //     console.log('User cancelled image picker');
//     //   } else if (response.error) {
//     //     console.log('ImagePicker Error: ', response.error);
//     //   } else if (response.customButton) {
//     //     console.log('User tapped custom button: ', response.customButton);
//     //   } else {
//     //     const source = { uri: response?.uri };
//     //     console.log(source);
//     //     setImage(source);
//     //   }
//     // });
    
//     return (
//       <View style={styles.container}>
    
//           <TouchableOpacity onPress={selectImage} style={styles.button}>
//               <Text style={styles.buttonText}>Select File</Text>
//           </TouchableOpacity>       

//       </View>
//     );
// }
