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
	const { title, images, condition, description, price, edit } = props.route.params.listing;

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

			<Header width={constants.width} marginV={3} size={27} >{title}</Header>

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