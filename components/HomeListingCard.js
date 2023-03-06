import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeListingCard({image, onPress}) {

	return (
			<TouchableOpacity style={styles.wrapper} activeOpacity={.8} onPress={onPress}>
					<Image style={styles.img} source={{uri: image}} />
			</TouchableOpacity>
	)

}

const styles = StyleSheet.create({
    wrapper: {
        width: 130,
        height: 130,
        borderRadius: 15,
        marginTop: 40,
        marginLeft: 7,
        marginRight:7,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'orange',
        position: 'relative',
    },
    img: {
        width: 130,
        height: undefined,
        aspectRatio: 1
    }
});