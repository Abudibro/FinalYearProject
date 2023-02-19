import { useState, useEffect } from "react";
import { StyleSheet, Dimensions, View, ScrollView } from "react-native";
import ConditionDropdown from "../components/ConditionDropdpwn";
import Description from "../components/Description";
import AddPhotos from "../components/AddPhotos";
import TextInputBox from "../components/TextInput";
import ButtonCustom from '../components/Button'
import Header from "../components/Header";
import TitleSection from "../components/TitleSection";
import Map from "../components/Map";
import AvailabilityPicker from "../components/AvailabilityPicker";
import constants from "../global";

export default function NewListing({ navigation, route }) {
	var edit = false;
	var listing = false;
	if (route.params?.edit) {
		edit = true;
		listing = route.params.listing;
	}

	const [name, setName] = useState(edit ? listing.name : null)
	const [price, setPrice] = useState(edit ? listing.price : null)
	const [condition, setCondition] = useState(edit ? listing.condition : null)
	const [description, setDescription] = useState(edit ? listing.description : null)
	const [images, setImages] = useState(edit ? listing.images : []);
	const [selectedLocations, setSelectedLocations] = useState(edit ? listing.selectedLocations : []);
	const [selectedTimes, setSelectedTimes] = useState([[],[],[],[],[],[],[]]);
    
	const isListingPreviewDisabled = () => {
		return name == null
		|| price == null
		|| images === null
		|| condition === null
		|| description === null
		|| selectedLocations.length == 0
		|| name.trim().length === 0
		|| price.trim().length === 0
		|| description.trim().length === 0
		|| images.length === 0
		|| !selectedTimes.some( function (a) { return a.length > 0 })
		|| edit && (
			listing.name === name
			&& listing.price === price
			&& listing.condition === condition
			&& listing.description === description
			&& listing.images === images
			&& listing.selectedLocations.some((a, i) => a != selectedLocations[i])
			// && listing.selectedLocations.some((a, i) => {a.some((e, j) => { return e != selectedLocations[i][j]})})
		)
	}

	return(
		<ScrollView style={{flex: 1, backgroundColor: '#0d0d0d'}}>
			<View style={styles.container}>
				<TitleSection>
					<Header center >
							Tell us what you're selling
					</Header>
				</TitleSection>

				{/* Name */}
				<TextInputBox
						label="Name"
						placeholder="Name your listing"
						onChange={setName}
						initialValue={name}
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
						initialValue={price}
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
						initialValue={description}
				></Description>

				<Map locations={constants.LOCATIONS} prevScreen='new-listing' selectedLocations={selectedLocations} setSelectedLocations={setSelectedLocations} />

				<AvailabilityPicker selectedTimes={selectedTimes} setSelectedTimes={setSelectedTimes} />

				{/* Preview Listing */}
				<ButtonCustom onClick={() => navigation.navigate('preview-listing', {listing: {
					name, price, condition, images, description, edit, listingId: edit ? listing.listingID: null, selectedLocations, selectedTimes
				}})} marginBottom={Dimensions.get('window').height*.1} marginTop={Dimensions.get('window').height*.02} size={16} weight={"600"} disabled={isListingPreviewDisabled()} >Preview Listing</ButtonCustom>
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