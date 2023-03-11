import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Dimensions, Image, View, TouchableOpacity, Text } from "react-native";
import ButtonCustom from "../components/Button";
import Header from "../components/Header";
import AntDesign from 'react-native-vector-icons/AntDesign'
import constants from "../global";

export default function ViewListing({navigation, route}) {

	const { id, userOwnsListing } = route.params;

	// useEffect(() => {
	// 	// Get item info using id
	// 	// run this every time page is refreshed
	// }, []);

	const [numberRevealed, setNumberRevealed] = useState(false)
	const [liked, setLiked] = useState(false);
	const [listing, setListing] = useState(constants.MOCK_LISTING)

	const {condition, description, images, title, price, selectedLocations, sellerID} = listing;

	const styles  = StyleSheet.create({
		container: {
			flex: 1,
      backgroundColor: '#0d0d0d',
		},
		containerChildren: {
			alignItems: 'center',
			justifyContent: 'center',
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
		infoWrapper: {
			backgroundColor: "#181818",
			borderRadius: 13,
			paddingVertical: 15,
			marginVertical: 10
		},
		sellersNumberWrapper: {
			height: 50,
			width: constants.width,
			marginVertical: 7,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		description: {
			backgroundColor: "#181818",
			borderColor: "#181818",
			borderWidth: 2,
			borderRadius: 13,
			minHeight: 100,
			color: "#848484",
			fontSize: 16,
			width: constants.width,
			marginVertical: 20
		}
	})

	const renderImages = () => {
    return(
      images.map((image, i) => <Image source={{ uri: image.uri }} style={styles.image} key={i} /> )
    )
  }

	const onBuyNowClick = () => {}
	// On buy now click, check that the item hasn't been bought

	return (
		<ScrollView bounces={false} style={styles.container} contentContainerStyle={styles.containerChildren}>
			{/* Button for user to edit their own listing */}
			{
				userOwnsListing &&
				<ButtonCustom onClick={() => navigation.navigate('new-listing', {listing: listing, edit: true})} bg='#46484d' marginBottom={10} marginTop={15} size={16} weight={"600"}>Edit Listing</ButtonCustom>
			}
			
			{/* Images of listing */}
			<ScrollView horizontal={true} style={styles.imagesScroll} bounces={false} pagingEnabled={true}>
				{renderImages()}
			</ScrollView>

			{/* Listing Name */}
			<Header width={constants.width} marginV={3} size={27} >{title}</Header>

			{/* Listing Price & Like button */}
			<View style={styles.sellersNumberWrapper}>
				<Header marginV={3} size={40} >£{price}</Header>
				<TouchableOpacity activeOpacity={.7} onPress={() => setLiked(!liked)} style={{paddingRight: 10}}>
					<AntDesign name='heart' size={35} color={liked ? '#2846c4' : '#848484'} />
				</TouchableOpacity>
			</View>


			<View style={styles.infoWrapper}>
				<Header paddingLeft={15} width={constants.width} weight='700' size={16}>Condition:{`\t	${condition}`}</Header>
				<Header paddingLeft={15} width={constants.width} weight='700' size={16}>Posted:{`\t	3d ago`}</Header>
			</View>
			
			<View style={styles.description}>
				<Text style={{width: constants.width, padding: 14, color: "#848484",}} >
					{description}
				</Text>
			</View>

			<ButtonCustom disabled={userOwnsListing} onClick={() => navigation.navigate('pick-location', {selectedLocations: selectedLocations})} marginBottom={90} marginTop={15} size={16} weight={"600"}>Buy Now</ButtonCustom>
		</ScrollView>
	)
}