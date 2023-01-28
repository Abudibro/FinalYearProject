import { useState } from "react";
import { StyleSheet, Dimensions, View, ScrollView } from "react-native";
import ConditionDropdown from "../components/ConditionDropdpwn";
import Description from "../components/Description";
import AddPhotos from "../components/AddPhotos";
import TextInputBox from "../components/TextInput";
import ButtonCustom from '../components/Button'
import Header from "../components/Header";
import TitleSection from "../components/TitleSection";

export default function NewListing({changeNav}) {
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const [condition, setCondition] = useState(null)
    const [description, setDescription] = useState(null)
    const [images, setImages] = useState(null);
    
    const isListingPreviewDisabled = () => {
        return name == null
            || price == null
            || images === null
            || condition === null
            || description === null
            || name.trim().length === 0
            || price.trim().length === 0
            || description.trim().length === 0
            || images[0].uri === undefined
    }

    return(
			<ScrollView style={{flex: 1, backgroundColor: '#0d0d0d'}}>
				<View style={styles.container}>
					{/* <Header center margin={25} >
							Tell us what you're selling
					</Header> */}

					<TitleSection>
					<Header center >
							Tell us what you're selling
					</Header>
					</TitleSection>

					

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
      flex: 1,
      backgroundColor: '#0d0d0d',
      alignItems: 'center',
      justifyContent: 'center',
    }
})