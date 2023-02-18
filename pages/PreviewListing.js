import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Dimensions, Image, View, TouchableOpacity, Text } from "react-native";
import ButtonCustom from "../components/Button";
import Header from "../components/Header";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Loading from "../components/Loading";
import Tick from "../components/Tick";
import constants from "../global";

export default function PreviewListing(props) {
	const [numberRevealed, setNumberRevealed] = useState(false)
	const [liked, setLiked] = useState(false);
	const [isLoading, setIsLoading] = useState(null);
	const [calloutFailed, setCalloutFailed] = useState(false); 

	const {navigation} = props;
	const { name, images, condition, description, price, edit } = props.route.params.listing;

	const listing = {
		condition: "New", 
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor. Venenatis tellus in metus vulputate eu scelerisque felis. Diam in arcu cursus euismod quis viverra. Nibh ipsum consequat nisl vel pretium. Dignissim suspendisse in est ante. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Pellentesque diam volutpat commodo sed egestas. Vel elit scelerisque mauris pellentesque. Eget duis at tellus at urna. Amet facilisis magna etiam tempor orci eu. Et malesuada fames ac turpis egestas sed tempus urna. Enim praesent elementum facilisis leo vel. Nisi quis eleifend quam adipiscing. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Viverra aliquet eget sit amet tellus. Vitae turpis massa sed elementum tempus egestas sed. Enim ut tellus elementum sagittis vitae et. Ultrices mi tempus imperdiet nulla. Et odio pellentesque diam volutpat commodo sed egestas egestas. Urna nunc id cursus metus aliquam. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Id volutpat lacus laoreet non. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Vitae suscipit tellus mauris a diam maecenas sed enim. Suspendisse in est ante in nibh mauris. Dignissim sodales ut eu sem integer vitae.",
		images: [
			{"assetId": "259C9570-436F-4AC0-A7B1-04C7F745B579/L0/001", "fileName": "IMG_0837.jpg", "fileSize": 5630126, "height": 4032, "type": "image", "uri": "file:///var/mobile/Containers/Data/Application/099A6AD5-697F-449A-B22A-505B1A826615/Library/Caches/ExponentExperienceData/%2540anonymous%252FFinalYearProject-d4a926bf-56ee-4a53-b828-de92aaf5df39/ImagePicker/70F0267A-13AC-4945-96AC-356337626FF7.jpg", "width": 3024},
			{"assetId": "CD58EA64-21E6-473A-AC5C-45DA4326543C/L0/001", "fileName": "IMG_0838.jpg", "fileSize": 5440396, "height": 4032, "type": "image", "uri": "file:///var/mobile/Containers/Data/Application/099A6AD5-697F-449A-B22A-505B1A826615/Library/Caches/ExponentExperienceData/%2540anonymous%252FFinalYearProject-d4a926bf-56ee-4a53-b828-de92aaf5df39/ImagePicker/828F7669-79FB-41BB-87B4-2070D8FC5B6A.jpg", "width": 3024},
			{"assetId": "CD58EA64-21E6-473A-AC5C-45DA4326543C/L0/001", "fileName": "IMG_0838.jpg", "fileSize": 5440396, "height": 4032, "type": "image", "uri": "file:///var/mobile/Containers/Data/Application/099A6AD5-697F-449A-B22A-505B1A826615/Library/Caches/ExponentExperienceData/%2540anonymous%252FFinalYearProject-d4a926bf-56ee-4a53-b828-de92aaf5df39/ImagePicker/828F7669-79FB-41BB-87B4-2070D8FC5B6A.jpg", "width": 3024},
			// {"assetId": "D6DB0804-D09E-4BD6-A332-7A4D818362D4/L0/001", "fileName": "IMG_0836.jpg", "fileSize": 5739259, "height": 4032, "type": "image", "uri": "file:///var/mobile/Containers/Data/Application/099A6AD5-697F-449A-B22A-505B1A826615/Library/Caches/ExponentExperienceData/%2540anonymous%252FFinalYearProject-d4a926bf-56ee-4a53-b828-de92aaf5df39/ImagePicker/FAE11706-8CB9-47D2-AC13-744864BD7075.jpg", "width": 3024}
		],
		name: "Boris Bike",
		price: "35",
		selectedLocations: [],
		selectedTimes: []
	}
	// const { name, images, condition, description, price } = listing

	const renderImages = () => {
    return(
      images.map((image, i) => <Image source={{ uri: image.uri }} style={styles.image} key={i} /> )
    )
  }

	const onPublishListingClick = () => {
		setIsLoading(true);
		setTimeout(() => setIsLoading(false), 5000)
	
		//If {edit} == true then send UPDATE req to edit the listing rather than create a new one, (use listingID to find listing in DB)
		// else send POST req making a new listing

		// Put your req here - on success, set isloading = false
		// set calloutfailed to true when err = true 
	};

	const onItemLike = () => {
		
	}

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

	return (
		isLoading ?
		<Loading />
		: isLoading === false ?
		<Tick onTickFinish={() => navigation.navigate('new-listing')} />
		:
		<ScrollView bounces={false} style={styles.container} contentContainerStyle={styles.containerChildren}>
			
			<ButtonCustom onClick={() => navigation.goBack()} bg='#46484d' marginBottom={10} marginTop={15} size={16} weight={"600"}>Edit Listing</ButtonCustom>

			<ScrollView horizontal={true} style={styles.imagesScroll} bounces={false} pagingEnabled={true}>
				{renderImages()}
			</ScrollView>

			<Header width={constants.width} marginV={3} size={27} >{name}</Header>

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

			<ButtonCustom onClick={onPublishListingClick} marginBottom={90} marginTop={15} size={16} weight={"600"}>Publish Listing</ButtonCustom>
		</ScrollView>
	)
}