import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'

import TimePicker from '../../components/TimePicker'
import TitleSection from '../../components/TitleSection'
import Header from '../../components/Header'
import constants from '../../global'

import AntDesign from 'react-native-vector-icons/AntDesign'

const PickTime = ({navigation, route}) => {
	const timeOptions = constants.MOCK_MEETUP_TIMES_GRID;
	const [meetUpTime, setMeetUpTime] = useState({i: null, j: null});
	const disabled = meetUpTime.i === null;

	const calculateMeetupDateTime = () => {
		const {i, j} = meetUpTime;

		if (i === null) return

		const currDate = new Date();
		const meetUpDate = new Date();

		meetUpDate.setHours(j+8, 0, 0, 0);
		const currDayIndex = currDate.getUTCDay()-1;

		if (i === currDayIndex) {
			const currHour = currDate.getUTCHours();
			if ((j+8) - currHour < 2) meetUpDate.setDate(meetUpDate.getDate() + 7);
		}
		else if (i < currDayIndex) meetUpDate.setDate(meetUpDate.getDate() + 7 - (currDayIndex - i));
		else meetUpDate.setDate(meetUpDate.getDate() + (i - currDayIndex));

		return {
			date: meetUpDate.toDateString(),
			time: meetUpDate.getUTCHours()+':00',
		};
	}

	const meetUpDate = calculateMeetupDateTime();


	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<TitleSection>
						<Header center size={25} color='#f1f1f1' >Pick a meeting time</Header>   
				</TitleSection>

				<TimePicker
					times={timeOptions}
					setTimes={setMeetUpTime}
					meetUpTime={meetUpTime}
				/>

				<Header size={17} weight='400' color='#f1f1f1' center width={constants.width} >
					{
						`Your meeting will be at:\n ${ disabled ? '' : 
						meetUpDate.date + `, ` + meetUpDate.time
					}`
					}
				</Header>

				<View style={{width: constants.width, justifyContent: 'space-between', flexDirection: 'row'}}>
					<TouchableOpacity activeOpacity={.8} onPress={() => navigation.goBack()}>
						<AntDesign name='leftcircle' size={45} color='#2846c4'/>
					</TouchableOpacity>
					
					<TouchableOpacity activeOpacity={.8} disabled={disabled} style={{opacity: disabled && .4}} onPress={() => navigation.navigate('review-meetup', {selectedLocation: route.params.selectedLocation, selectedTime: meetUpDate})}>
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

export default PickTime;
