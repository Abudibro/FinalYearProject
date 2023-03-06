import React, {useEffect, useState} from 'react'
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native'

import SixDigitCode from '../../components/SixDigitCode'
import Header from '../../components/Header'
import Loading from "../../components/Loading"
import ButtonCustom from '../../components/Button'
import constants from '../../global'

import Ionicons from 'react-native-vector-icons/Ionicons';

import Scrollable from 'react-native-modal';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const PurchaseConfirmation = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [userHasArrived, setUserHasArrived] = useState(false);
	const [listing, setListing] = useState({
		code: "123456",
		listingID: 12,
		location: {
			address: "Selly Oak, Birmingham B29 6NA",
			area: "Selly Oak",
			coordinates: [-1.935608, 52.441858],
			id: "a2011b7a9048cac236499bf9ff4037cf",
			parking: true,
			title: "Selly Oak Station"
		},
		time: {
			date: "Sat Mar 11 2023",
			time: "16:00"
		}
	});
	const [modalOpen, setModalOpen] = useState(false);
	
	const renderSteps = () => {
		return (
			constants.MEETUP_STEPS.map((step, i) => {
				return (
					<View key={i} style={styles.stepsContainer} >
						<Header size={17} weight='200' color='#f1f1f1'  >{(i+1)+'.' }</Header>
						<Header size={17} weight='200' color='#f1f1f1' paddingLeft={10} width={constants.width - 11.7 - 34}>
							{step}
						</Header>
					</View>
				)
			})
		)
	}

	const onUserDoesntWantItem = () => {}
	const onUserConfirmsAttendance = () => {
		setModalOpen(false);
		//checks users location
		//iff user is there ->
		setUserHasArrived(true);
	}

	const renderAction = () => {
		if (userHasArrived) return <ButtonCustom onClick={() => onUserDoesntWantItem()} marginTop={30} marginBottom={constants.MARGIN_BOTTOM} size={16} weight={"600"} >I don't want this item</ButtonCustom>
		return <ButtonCustom onClick={() => setModalOpen(true)} marginTop={30} marginBottom={constants.MARGIN_BOTTOM} size={16} weight={"600"} >I am here</ButtonCustom>
	}
	
	if (isLoading ) {
		return <Loading />
	}

	return (
		<ScrollView style={{flex: 1, backgroundColor: '#0d0d0d'}} bounces={false} >
			<View style={styles.container}>
				<Header center size={25} marginV={30} color='#f1f1f1' >Your buyer code:</Header>
				<SixDigitCode code={listing.code} />
				<Header color='#f1f1f1' size={20} weight='500' marginV={10} >What happens now?</Header>
				{renderSteps()}

				{renderAction()}
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
					<View style={[styles.warningContainer]}>
						<View style={[styles.informationContainer, {backgroundColor: 'transparent', marginVertical: 0, paddingVertical: 0, marginBottom: 10}]}>
							<Header size={17} weight='700' color='#a81811'  >
								<Ionicons name='warning-outline' size={25} color='#a81811' />
								WARNING!
							</Header>
						</View>
						<Header size={17} weight='500' color='#a81811' paddingLeft={7} center width={constants.width - 14}  >
							{constants.WARNING_I_AM_HERE}
						</Header>
					</View>

					<ButtonCustom marginTop={20} onClick={() => onUserConfirmsAttendance()} size={16} weight={"600"} >I Confirm</ButtonCustom>
				</View>
			</Scrollable>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0d0d0d',
		flexDirection: 'column',
		alignItems: 'center'
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
	stepsContainer: {
		width: constants.width,
		flexDirection: 'row',
		// alignItems: 'center',
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

export default PurchaseConfirmation;
