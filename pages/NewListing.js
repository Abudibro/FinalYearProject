import { useState } from "react";
import { StyleSheet, Dimensions, View, Text, TextInput, ScrollView } from "react-native";
import ConditionDropdown from "../components/ConditionDropdpwn";
import Description from "../components/Description";
import AddPhotos from "../components/AddPhotos";
import TextInputBox from "../components/TextInput";
import ButtonCustom from '../components/Button'

export default function NewListing({changeNav}) {
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const [condition, setCondition] = useState(null)
    const [description, setDescription] = useState(null)
    const [images, setImages] = useState(null);
    
    const isListingPreviewDisabled = () => {
        return name == null || price == null || images === null || condition === null || description === null
    }

    console.log(isListingPreviewDisabled())

    // const onPreviewListingClick = () => {

    // }

    return(
        <ScrollView style={{flex: 1, backgroundColor: '#0d0d0d'}}> 
            <View style={styles.container}>
                {/* Name */}
                <TextInputBox
                    label="Name"
                    placeholder="Name your listing"
                    margin={15}
                    onChange={setName}
                />
                
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

                {/* Preview Listing */}
                <ButtonCustom onClick={() => changeNav(3)} marginBottom={Dimensions.get('window').height*.1} marginTop={Dimensions.get('window').height*.02} size={16} weight={"600"} disabled={isListingPreviewDisabled()} >Preview Listing</ButtonCustom>
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