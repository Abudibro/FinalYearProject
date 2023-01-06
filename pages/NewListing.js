import { useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Header from "../components/Header";
import TextInputBox from "../components/TextInput";

export default function NewListing() {
    const [name, setName] = useState(null)


    return(
        <View style={styles.container}>
            <View>
                <TextInputBox
                    onChangeText={setName}
                >
                    {name}
                </TextInputBox>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      backgroundColor: '#0d0d0d',
      alignItems: 'center',
      justifyContent: 'center',
    }
})