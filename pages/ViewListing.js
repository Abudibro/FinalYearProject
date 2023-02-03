import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Dimensions, Image, View, TouchableOpacity, Text } from "react-native";
import ButtonCustom from "../components/Button";
import Header from "../components/Header";
import AntDesign from 'react-native-vector-icons/AntDesign'

const width = (Dimensions.get('window').width * 0.85) + 4;

export default function ViewListing({navigation, route}) {
 {/**
Options:
	1. Data for viewed items is pulled on main screen, and passed onto this class, can instantly render when clicked on
	2. Only IDs and images are pulled to Home page, when clicking, rest of information is pulled to screen -> better option
	3. Send everything, on Page refresh, get data pulled again. On buy now click, check that the item hasn't been bought
*/}
	const { id } = route.params;

	useEffect(() => {
		// Get item info using id
		// run this every time page is refreshed
	}, []);

	const [numberRevealed, setNumberRevealed] = useState(false)
	const [liked, setLiked] = useState(false);
	const item = useState({
	})

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
      item.images.map((image, i) => <Image source={{ uri: image.uri }} style={styles.image} key={i} /> )
    )
  }

	const onBuyNowClick = () => navigation.navigate('loading')
	// On buy now click, check that the item hasn't been bought

	return (
		<ScrollView bounces={false} style={styles.container} contentContainerStyle={styles.containerChildren}>

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

			<ButtonCustom disabled={route.params.disabled} onClick={onBuyNowClick} marginBottom={90} marginTop={15} size={16} weight={"600"}>Buy Now</ButtonCustom>
		</ScrollView>
	)
}