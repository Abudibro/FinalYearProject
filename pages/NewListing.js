import { useState } from "react";
import { StyleSheet, Dimensions, View, Text, TextInput, ScrollView } from "react-native";
import ConditionDropdown from "../components/ConditionDropdpwn";
import Description from "../components/Description";
import AddPhotos from "../components/AddPhotos";
import TextInputBox from "../components/TextInput";

export default function NewListing(props) {
    const [price, setPrice] = useState(null)
    const [condition, setCondition] = useState(null)
    const [description, setDescription] = useState(null)
    const [images, setImages] = useState(null);

    return(
        <ScrollView style={{flex: 1, backgroundColor: '#0d0d0d'}}> 
            <View style={styles.container}>
                {/* Name */}
                
                {/* Image */}
                <AddPhotos setImages={setImages} images={images} />

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

                {/* Condition */}
                <ConditionDropdown setCondition={setCondition} condition={condition}/>

                {/* Description */}
                <Description
                    label='Description'
                    placeholder="Enter a description"
                    onChange={setDescription}
                ></Description>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0d0d0d',
      alignItems: 'center',
      justifyContent: 'center',
    }
})