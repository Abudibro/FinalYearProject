import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeProductCard({onPress, navigation}) {
	// const { name, price, condition, images, description } = listing;
	const {name, images, condition, description, price } = {
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
		
	}

	return (
			<TouchableOpacity style={styles.wrapper} activeOpacity={.8} onPress={onPress}>
					<Image style={styles.img} source={{uri: images[0].uri}} />
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