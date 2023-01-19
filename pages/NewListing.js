import { useState } from "react";
import { StyleSheet, Dimensions, View, Text, TextInput } from "react-native";
import Header from "../components/Header";
import TextInputBox from "../components/TextInput";

export default function NewListing(props) {
    const [price, setPrice] = useState(null)

    console.log(price)

    return(
        <View style={styles.container}>
            {/* Name */}
            



            {/* Price */}
            <TextInputBox
                label='Price'
                placeholder="Enter a price"
                onChange={setPrice}
                prefix={'£'}
                int
            >
                {price}
            </TextInputBox>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0d0d',
      alignItems: 'center',
      justifyContent: 'center',
    }
    // ,
    // name: {
    //     width: (Dimensions.get('window').width * 0.85) + 4,
    //     height: 65c,
    //     backgroundColor: "#181818",
    //     borderRadius: 20,
    //     color: "#848484",
    //     fontSize: 20,
    //     paddingLeft: 15
    // }
})