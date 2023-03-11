import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import Header from './Header';

export const ListingImage = ({image, onPress, dimensions }) => {

	const styles = StyleSheet.create({
    wrapper: {
			width: dimensions,
			height: dimensions,
			borderRadius: 15,
			marginTop: 40,
			marginLeft: 7,
			marginRight: 7,
			overflow: 'hidden',
			alignItems: 'center',
			backgroundColor: 'orange',
			position: 'relative',
    },
    img: {
			width: dimensions, //130,
			height: undefined,
			aspectRatio: 1
    }
	});

	return (
			<TouchableOpacity style={styles.wrapper} activeOpacity={.8} onPress={onPress}>
					<Image style={styles.img} source={{uri: image}} />
			</TouchableOpacity>
	)
}

export const ListingCard = ({onPress, dimensions, listing}) => {

	const {listingId, title, image, price, condition} = listing;

	const styles = StyleSheet.create({
		card: {
			width: dimensions,
			justifyContent: 'center',
			alignItems: 'center',
			margin: 5
		},
		informationContainer: {
			width: dimensions,
			flexDirection: 'column',
			alignItems: 'flex-start'
		}
	})

	return (
		<View style={styles.card}>
			<ListingImage image={image} onPress={onPress} dimensions={dimensions} />
			<View style={styles.informationContainer}>
				<Header weight={'400'} size={15} marginT={8} numOfLines={1}>{title}</Header>
				<Header weight={'800'} size={25} marginT={2} numOfLines={1}>£{price}</Header>
				<Header weight={'400'} size={12} numOfLines={1}>{condition}</Header>
			</View>
		</View>
	)
}