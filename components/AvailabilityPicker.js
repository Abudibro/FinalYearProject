import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import constants from "../global";
import Header from "./Header";

const days = [
	'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
]

const timeOptions = [
	'07:00', '07:30',
	'08:00', '08:30',
	'09:00', '09:30',
	'10:00', '10:30',
	'11:00', '11:30',
	'12:00', '12:30',
	'13:00', '13:30',
	'14:00', '14:30',
	'15:00', '15:30',
	'16:00', '16:30',
	'17:00', '17:30',
	'18:00', '18:30',
	'19:00', '19:30',
	'20:00', '20:30',
	'21:00'
]

function AvailabilityPicker({selectedTimes, setSelectedTimes}) {
	const [clicked, setClicked] = useState(null);

	const onDayPress = i => {
		if (clicked != null) { 
			if (i === clicked) setClicked(null)
			else setClicked(i);
		}
		else setClicked(i);
	}

	const onTimePress = (time, selected) => {
		const newSelectedTimes = [...selectedTimes];
		if (selected) {
			newSelectedTimes[clicked] = newSelectedTimes[clicked].filter(t => t != time);
		}
		else {
			newSelectedTimes[clicked].push(time);
		}

		setSelectedTimes(newSelectedTimes);
		console.log(selectedTimes)
	}

	const renderDays = () => {
		return (
			days.map((day, i) => {
				return <DayPicker day={day} key={i} onPress={() => onDayPress(i)} clicked={clicked === i} />
			})
		)
	}

	const renderTimes = () => {
		return (
			timeOptions.map((time, i) => {
				return <TimeOption time={time} key={i} selected={selectedTimes[clicked].indexOf(time) != -1 } onPress={onTimePress} />
			})
		)
	}

	return (
		<View style={styles.container}>
			<Header paddingLeft={19} marginV={14} size={15} weight='600'>What is your availability?</Header>
			<ScrollView bounces={false} horizontal={true} style={{width: '100%'}} showsHorizontalScrollIndicator={false} >
				{renderDays()}
			</ScrollView>

			{
				clicked != null &&
				<ScrollView bounces={false} style={styles.timeOptionsScroll}>
					{renderTimes()}
				</ScrollView>
			}

		</View>
	)
}

const DayPicker = ({day, clicked, onPress,}) => {
	return (
		<TouchableOpacity style={[styles.dayContainer, clicked ? styles.clicked : styles.notClicked]} activeOpacity={.7} onPress={onPress} >
			<Header size={20} color={clicked ? '#181818': '#f1f1f1'} weight='600' >{day}</Header>
		</TouchableOpacity>
	)
}

const TimeOption = ({time, selected, onPress}) => {
	
	return (
		<TouchableOpacity style={[styles.timeOption, selected ? styles.clicked : styles.notClicked]} onPress={() => onPress(time, selected)} >
			<Header size={20} color={selected ? '#181818': '#f1f1f1'} weight='600'>{time}</Header>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: constants.width,
		marginVertical: 20
	},
	dayContainer: {
		height: 80,
		width: 60,
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#181818',
		marginRight: 20
	},
	timeOption: {
		width: constants.width,
		height: 59,
		borderRadius: 12,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 7.5 
	},
	clicked: {
		backgroundColor: '#f1f1f1',
		borderColor: '#f1f1f1',
		color: '#181818'
	},
	notClicked: {
		backgroundColor: '#181818',
		borderColor: '#f1f1f1',
		color: '#f1f1f1'
	},
	timeOptionsScroll: {
		height: 250,
		marginTop: 20,
		borderRadius: 12
	}
})

export default AvailabilityPicker;
