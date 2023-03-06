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
	const [listing, setListing] = useState({
		listingID: id,
		condition: "New", 
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor. Venenatis tellus in metus vulputate eu scelerisque felis. Diam in arcu cursus euismod quis viverra. Nibh ipsum consequat nisl vel pretium. Dignissim suspendisse in est ante. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Pellentesque diam volutpat commodo sed egestas. Vel elit scelerisque mauris pellentesque. Eget duis at tellus at urna. Amet facilisis magna etiam tempor orci eu. Et malesuada fames ac turpis egestas sed tempus urna. Enim praesent elementum facilisis leo vel. Nisi quis eleifend quam adipiscing. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Viverra aliquet eget sit amet tellus. Vitae turpis massa sed elementum tempus egestas sed. Enim ut tellus elementum sagittis vitae et. Ultrices mi tempus imperdiet nulla. Et odio pellentesque diam volutpat commodo sed egestas egestas. Urna nunc id cursus metus aliquam. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Id volutpat lacus laoreet non. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Vitae suscipit tellus mauris a diam maecenas sed enim. Suspendisse in est ante in nibh mauris. Dignissim sodales ut eu sem integer vitae.",
		images: [
			{"assetId": "259C9570-436F-4AC0-A7B1-04C7F745B579/L0/001", "fileName": "IMG_0837.jpg", "fileSize": 5630126, "height": 4032, "type": "image", "uri": "file:///var/mobile/Containers/Data/Application/099A6AD5-697F-449A-B22A-505B1A826615/Library/Caches/ExponentExperienceData/%2540anonymous%252FFinalYearProject-d4a926bf-56ee-4a53-b828-de92aaf5df39/ImagePicker/70F0267A-13AC-4945-96AC-356337626FF7.jpg", "width": 3024},
			{"assetId": "CD58EA64-21E6-473A-AC5C-45DA4326543C/L0/001", "fileName": "IMG_0838.jpg", "fileSize": 5440396, "height": 4032, "type": "image", "uri": "file:///var/mobile/Containers/Data/Application/099A6AD5-697F-449A-B22A-505B1A826615/Library/Caches/ExponentExperienceData/%2540anonymous%252FFinalYearProject-d4a926bf-56ee-4a53-b828-de92aaf5df39/ImagePicker/828F7669-79FB-41BB-87B4-2070D8FC5B6A.jpg", "width": 3024},
			{"assetId": "CD58EA64-21E6-473A-AC5C-45DA4326543C/L0/001", "fileName": "IMG_0838.jpg", "fileSize": 5440396, "height": 4032, "type": "image", "uri": "file:///var/mobile/Containers/Data/Application/099A6AD5-697F-449A-B22A-505B1A826615/Library/Caches/ExponentExperienceData/%2540anonymous%252FFinalYearProject-d4a926bf-56ee-4a53-b828-de92aaf5df39/ImagePicker/828F7669-79FB-41BB-87B4-2070D8FC5B6A.jpg", "width": 3024},
		],
		name: "Boris Bike",
		price: "35",
		sellerID: 13,
		selectedLocations: [
			{
				title: "St Mary's Church of England",
				address: "Bristol Rd, Selly Oak, Birmingham B29 6ND",
				area: "Selly Oak",
				parking: true,
				coordinates: [
					-1.943097,
					52.439152
				],
				id: "434bef4549ac359d74236f6353867db6"
			},
			{
				title: "Selly Oak Station",
				address: "Selly Oak, Birmingham B29 6NA",
				area: "Selly Oak",
				parking: true,
				coordinates: [
					-1.935608,
					52.441858
				],
				id: "a2011b7a9048cac236499bf9ff4037cf"
			},
			{
				title: "Tesco Express",
				address: "479 Bristol Rd, Bournbrook, Birmingham B29 6BA",
				area: "Selly Oak",
				parking: true,
				coordinates: [
					-1.934392,
					52.445445
				],
				id: "c28cdd16f6af645fab5314a1ef53edfc"
			}
		],
		selectedTimes: constants.MOCK_MEETUP_TIMES_GRID
	})

	const {condition, description, images, name, price, selectedLocations, sellerID} = listing;

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
			<Header width={constants.width} marginV={3} size={27} >{name}</Header>

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