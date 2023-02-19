import { useState, memo, useEffect } from "react"
import { View, StyleSheet } from "react-native"
import Header from "../Header"
import Map from "../Map"
import TitleSection from "../TitleSection"
import useIsReady from "../isReady"
import Loading from "../Loading"

function PickLocation({route}) {
	// const isReady = useIsReady();
	const [selectedLocation, setSelectedLocation]  = useState([]);
	const { selectedLocations } = route.params;

	// useEffect(() => {

	// }, [])
	
	// if (!isReady ) {
	// 	return <Loading />
	// }

  return (
    <View style={styles.container} >
        <TitleSection>
            <Header center size={25} color='#f1f1f1' >Where do you want to meet the seller?</Header>   
        </TitleSection>
				<Map
					locations={selectedLocations} // All possible locations buyer can pick from 
					selectedLocations={selectedLocation} // Location that buyer has picked
					setSelectedLocations={setSelectedLocation} // function to set location picked by buyer
					prevScreen='view-listing'
				/>

				
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0d0d0d',
		alignItems: 'center'
	}
})

export default memo(PickLocation);