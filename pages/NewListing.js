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
import constants from "../global";
import TimePicker from "../components/TimePicker";

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
	const [selectedTimes, setSelectedTimes] = useState(edit ? listing.selectedTimes : constants.MEETUP_TIMES_GRID);
    
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
		// || 
		|| edit && (
			listing.name === name
			&& listing.price === price
			&& listing.condition === condition
			&& listing.description === description
			&& listing.images === images
			&& areEqual(listing.selectedLocations, selectedLocations)
			&& !listing.selectedTimes.some((a, i) => a.some((e, j) => e != selectedTimes[i][j]))
		)
	}

	console.log(timesAreEqual(listing, selectedTimes))
	
	const printArr = (arr) => {
		arr.map(row => console.log('\n' +row))
		return
	} 
	
	printArr(selectedTimes);
	console.log('break')
	printArr(listing.selectedTimes);

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

				{/* Location Picker */}
				<Map locations={constants.LOCATIONS} pickMany selectedLocations={selectedLocations} setSelectedLocations={setSelectedLocations} label labelText={'Where are you willing to meet the buyer?'}/>
				
				{/* Availability Picker */}
				<View style={{width: constants.width, alignItems: 'flex-start'}}>
					<Header paddingLeft={19} marginV={14} size={15} weight='600' >When are you available?</Header>
				</View>
				<TimePicker times={selectedTimes} setTimes={setSelectedTimes} meetUpTime={false}/>

				{/* Preview Listing */}
				<ButtonCustom onClick={() => navigation.navigate('preview-listing', {listing: {
					name, price, condition, images, description, edit, listingId: edit ? listing.listingID: null, selectedLocations, selectedTimes
				}})} marginBottom={constants.MARGIN_BOTTOM} marginTop={Dimensions.get('window').height*.02} size={16} weight={"600"} disabled={isListingPreviewDisabled()} >Preview Listing</ButtonCustom>
			</View>
		</ScrollView>
	)
}

function areEqual(array1, array2) {
  if (array1.length != array2.length) return false
	array1.map((loc1, i) => {
		let found = false;
		array2.map(loc2 => {
			if (loc1 == loc2) {
				found = true;
				return;
			}
		})

		if (!found) {
			return false
		};
	})

  return true;
}

const timesAreEqual = (listing, selectedTimes) => {
	listing.selectedTimes.map((row, i) => {
		row.map((col, j) => {
			// console.log(col, selectedTimes[i][j])
			if (col != selectedTimes[i][j]) return false;
		})
	})

	return true;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0d0d',
      alignItems: 'center',
      justifyContent: 'center',
    }
})