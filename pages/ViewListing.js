import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Dimensions, Image, View, TouchableOpacity, Text } from "react-native";
import ButtonCustom from "../components/Button";
import Header from "../components/Header";
import AntDesign from 'react-native-vector-icons/AntDesign'

const width = (Dimensions.get('window').width * 0.85) + 4;

export default function ViewListing({navigation, route}) {
	const { id, ownListing } = route.params;

	useEffect(() => {
		// Get item info using id
		// run this every time page is refreshed
	}, []);

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
		sellerID: 13
	})

	const {condition, description, images, name, price, sellerID} = listing;

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
			width: width,
			height: width,
			borderRadius: 18,
		},
		imagesScroll: {
			width: width,
			height: width,
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
			width: width,
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
			width: width,
			marginVertical: 20
		}
	})

	const renderImages = () => {
    return(
      listing.images.map((image, i) => <Image source={{ uri: image.uri }} style={styles.image} key={i} /> )
    )
  }

	const onBuyNowClick = () => {}
	// On buy now click, check that the item hasn't been bought

	return (
		<ScrollView bounces={false} style={styles.container} contentContainerStyle={styles.containerChildren}>

			{
				ownListing &&
				<ButtonCustom onClick={() => navigation.navigate('new-listing', {listing: listing, edit: true})} bg='#46484d' marginBottom={10} marginTop={15} size={16} weight={"600"}>Edit Listing</ButtonCustom>
			}

			<ScrollView horizontal={true} style={styles.imagesScroll} bounces={false} pagingEnabled={true}>
				{renderImages()}
			</ScrollView>

			<Header width={width} marginV={3} size={27} >{name}</Header>

			<View style={styles.sellersNumberWrapper}>
				<Header marginV={3} size={40} >£{price}</Header>
				<TouchableOpacity activeOpacity={.7} onPress={() => setLiked(!liked)} style={{paddingRight: 10}}>
					<AntDesign name='heart' size={35} color={liked ? '#2846c4' : '#848484'} />
				</TouchableOpacity>
			</View>

			<View style={styles.infoWrapper}>
				<Header paddingLeft={15} width={width} weight='700' size={16}>Location:{`\t	Selly Oak`}</Header>
				<Header paddingLeft={15} width={width} weight='700' size={16}>Condition:{`\t	${condition}`}</Header>
				<Header paddingLeft={15} width={width} weight='700' size={16}>Posted:{`\t	3d ago`}</Header>
			</View>

			<View style={styles.sellersNumberWrapper}>
				<Header size={20} >Seller's number:</Header>
				{
					numberRevealed ? 
					<Header size={20} paddingRight={10} >07403785792</Header>
					: <ButtonCustom onClick={() => setNumberRevealed(true)} width={width/2 - width/10} size={16} weight={"600"} height={50} > Reveal</ButtonCustom>
				}
			</View>
			
			<View style={styles.description}>
				<Text style={{width: width, padding: 14, color: "#848484",}} >
					{description}
				</Text>
			</View>

			<ButtonCustom disabled={ownListing} onClick={onBuyNowClick} marginBottom={90} marginTop={15} size={16} weight={"600"}>Buy Now</ButtonCustom>
		</ScrollView>
	)
}