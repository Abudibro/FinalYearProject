import { useState, memo, useEffect } from "react"
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import Header from "../../components/Header"
import Map from "../../components/Map"
import TitleSection from "../../components/TitleSection"

import AntDesign from 'react-native-vector-icons/AntDesign'

import constants from "../../global"

function PickLocation({navigation, route}) {
	// const isReady = useIsReady();
	const [selectedLocation, setSelectedLocation]  = useState([]);
	const { selectedLocations } = route.params;

  return (
    <View style={styles.container} >
			<View style={styles.wrapper}>
				<TitleSection>
						<Header center size={25} color='#f1f1f1' >Where do you want to meet the seller?</Header>   
				</TitleSection>
				<Map
					locations={selectedLocations} // All possible locations buyer can pick from 
					selectedLocations={selectedLocation} // Location that buyer has picked
					setSelectedLocations={setSelectedLocation} // function to set location picked by buyer
					prevScreen='view-listing'
				/>
				<View style={{width: constants.width, justifyContent: 'space-between', flexDirection: 'row'}}>
					<View/>
					<TouchableOpacity activeOpacity={.8} disabled={selectedLocation.length === 0} style={{opacity: selectedLocation.length === 0 && .4}} onPress={() => navigation.navigate('pick-time', {selectedLocation: selectedLocation})}>
						<AntDesign name='rightcircle' size={45} color='#2846c4'/>
					</TouchableOpacity>
				</View>
			</View>
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0d0d0d',
		flexDirection: 'column',
		alignItems: 'center'
	},
	wrapper: {
		height: Dimensions.get('window').height - 160,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
})

export default memo(PickLocation);