import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'

import TitleSection from '../../components/TitleSection'
import Header from '../../components/Header'
import ButtonCustom from '../../components/Button'
import constants from '../../global'

import Scrollable from 'react-native-modal';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const ReviewMeetup = ({navigation, route}) => {

	const { selectedLocation, selectedTime } = route.params;
	const [modalOpen, setModalOpen] = useState(false);

	const onBookMeetupPress = () => {
		setModalOpen(false);
		navigation.navigate('purchase-confirmation', {selectedLocation, selectedTime})
	}


	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<TitleSection>
						<Header center size={25} color='#f1f1f1' >Your Meet-Up Details</Header>   
				</TitleSection>

				<View>
					<View style={styles.informationContainer}>
						<Ionicons name='location-sharp' color={'#2846c4'} size={32}  />
						<Header size={17} weight='400' color='#f1f1f1' paddingLeft={15} width={constants.width-53} >
							{selectedLocation.address}
						</Header>
					</View>

					<View style={styles.informationContainer}>
						<Ionicons name='time' color={'#2846c4'} size={32}  />
						<Header size={17} weight='400' color='#f1f1f1' paddingLeft={15} width={constants.width-53} >
							{selectedTime.date + `\n`}
							{selectedTime.time}
						</Header>
					</View>
				</View>

				<ButtonCustom onClick={() => setModalOpen(true)} size={16} weight={"600"} >Buy Now</ButtonCustom>


				<View style={{width: constants.width, justifyContent: 'space-between', flexDirection: 'row'}}>
					<TouchableOpacity activeOpacity={.8} onPress={() => navigation.goBack()}>
						<AntDesign name='leftcircle' size={45} color='#2846c4'/>
					</TouchableOpacity>
					<View></View>
				</View>
			</View>

			<Scrollable
				isVisible={modalOpen}
				onSwipeComplete={() => setPreviewLocation(false)}
				deviceWidth={deviceWidth}
				deviceHeight={deviceHeight}
				backdropOpacity={0.8}
				style={{ justifyContent: 'flex-end', margin: 0}}
				swipeDirection='down'
				animationType="slide"
  			transparent={true}
				onBackdropPress={() => setModalOpen(false)}
			>
				<View style={styles.modal}>
					<View style={styles.warningContainer}>
						<View style={[styles.informationContainer, {backgroundColor: 'transparent', marginVertical: 0, paddingVertical: 0, marginBottom: 10}]}>
							<Ionicons name='warning-outline' size={25} color='#a81811' />
							<Header size={17} weight='700' color='#a81811' paddingLeft={3}  >
								WARNING!
							</Header>
						</View>
						<Header size={17} weight='500' color='#a81811' paddingLeft={7} center width={constants.width - 14}  >
							{constants.WARNING}
						</Header>
					</View>

					<ButtonCustom marginTop={20} onClick={() => onBookMeetupPress()} size={16} weight={"600"} >Confirm Buy Now</ButtonCustom>
				</View>
			</Scrollable>

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
	informationContainer: {
		width: constants.width,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#181818',
		paddingVertical: 15,
		borderRadius: 10,
		marginVertical: 13
	},
	warningContainer: {
		width: constants.width,
		alignItems: 'center',
		// justifyContent: 'center',
		paddingVertical: 15,
		borderRadius: 15,
		marginVertical: 13,
		display: 'flex', flexDirection: 'column', backgroundColor: '#d6afae'
	}
})

export default ReviewMeetup;
