import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';

import Scrollable from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Header from './Header';
import ButtonCustom from './Button';
import constants from '../global';

const INITIAL_REGION = {
  latitude: 52.442491884825884,
  longitude: -1.9374960628970477,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height

export default function Map({locations, selectedLocations, setSelectedLocations, prevScreen}) {
	const mapRef = useRef(null);
	const [previewLocation, setPreviewLocation] = useState(false);
	const [locationPreviewing, setLocationPreviewing] = useState(locations[0]);

	const onAddLocationClick = () => {
		if (prevScreen === 'new-listing') {
			setSelectedLocations([...selectedLocations, locationPreviewing]);
		} else {
			setSelectedLocations(locationPreviewing);
		}
		setPreviewLocation(false);
	}

	const onRemoveLocationClick = () => {
		if (prevScreen === 'new-listing') {
			setSelectedLocations(selectedLocations.filter(location => location.title != locationPreviewing.title));
		} else {
			setSelectedLocations(null);
		}
		setPreviewLocation(false);
	}

  return (
    <View style={styles.container}>
			<Header paddingLeft={19} marginV={14} size={15} weight='600'>Location</Header>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
      >
				{
					locations.map((location, i) => {
						return (
							<Marker
								key={i}
								coordinate={{
									latitude: location.coordinates[1],
									longitude: location.coordinates[0]
								}}
								onPress={() => {
									console.log('modal')
									setLocationPreviewing(locations[i]);
									setPreviewLocation(true);
								}}
							>
								<Ionicons name='location-sharp' color={selectedLocations.indexOf(locations[i]) != -1 ? '#2846c4' : '#000'} size={45} />
							</Marker>
						)
					})
				}
			</MapView>

			<Scrollable
				isVisible={previewLocation}
				onSwipeComplete={() => setPreviewLocation(false)}
				deviceWidth={deviceWidth}
				deviceHeight={deviceHeight}
				backdropOpacity={0.7}
				style={{ justifyContent: 'flex-end', margin: 0}}
				swipeDirection='down'
				animationType="slide"
  				transparent={true}
				onBackdropPress={() => setPreviewLocation(false)}
			>
				<View style={styles.modal}>
					<View style={styles.locationPreviewingText}>
						<Header size={30} marginV={10} >{locationPreviewing.title}</Header>
						<Header size={20} marginV={10} weight='300' >{locationPreviewing.address}</Header>
						{
							locationPreviewing.parking &&
							<View style={{flexDirection: 'row', alignItems: 'center'}}>
								<FontAwesome5 name='parking' color={'#f1f1f1'} size={30} />
								<Header size={20} marginH={10} weight='300'>Parking Available</Header>	
							</View>
						}
					</View>
					
					{
						selectedLocations.indexOf(locationPreviewing) != -1 ?
						<ButtonCustom 
							bg='#f1f1f1'
							color='#000'
							onClick={() => onRemoveLocationClick()}
							size={16}
							weight={"600"}
							marginTop={10}
						>Remove Location</ButtonCustom>
						:
						<ButtonCustom 
						bg='#f1f1f1'
						color='#000'
						onClick={() => onAddLocationClick()} size={16} weight={"600"} marginTop={10}>Add Location</ButtonCustom>
					}
				</View>
			</Scrollable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		marginVertical: 20
  },
  map: {
    width: constants.width,
    height: constants.width,
		borderRadius: 13,
  },
	modal: {
		// height: '50%',
		padding: 50,
		backgroundColor:'#181818',
		width: deviceWidth,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	locationPreviewingText: {
		width: constants.width,
		alignItems: 'flex-start',
		marginBottom: 20
	}
});