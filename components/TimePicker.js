import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import constants from '../global'
import Header from './Header';

const optionsSize = (constants.width - 27 - (8 * 12)) / 13;
const timesLabels = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const dayLabels = ['Mo', 'Tue', 'We', 'Th', 'Fr', 'Sa', 'Su']

export default function TimePicker() {
	return (
		<View style={{flexDirection: 'row'}}>
			<View style={{height: (8 * optionsSize) + 56, width: 27}}>
				<View style={[styles.labelContainer, {width: '100%', alignItems: 'flex-start', marginVertical: 4}]}>
					<Header size={optionsSize-2} weight='300'>Hr</Header>
				</View>
				{renderDayLabels()}			
			</View>
			<View>
				{renderTimeLabels()}
				{renderOptions()}
			</View>
		</View>
	)
}

const renderTimeLabels = () => {
	return (
		<View style={styles.row}>
			{timesLabels.map((time, i) => {
				return (
					<View style={styles.labelContainer} key={i}>
						<Header size={optionsSize-2} weight='300'>{time}</Header>
					</View>
				)
			})}
		</View>
	)
}

const renderDayLabels = () => {
	return (
		dayLabels.map((day, i) => {
			return (
				<View style={[styles.labelContainer, {width: '100%', alignItems: 'flex-start', marginVertical: 4}]} key={i}>
					<Header size={optionsSize-2} weight='300'>{day}</Header>
				</View>
			)
		})
	)
}

const renderOptions = () => {
	return (
		constants.MEETUP_TIMES_GRID.map((row, i) => {
			return (
				<View style={styles.row}>
					{row.map((time, j) => {
						return (
							<TimeOption />
						)
					})}
				</View>
			)
		})
	)
}

const TimeOption = () => {
	return (
		<TouchableOpacity>
			<View style={styles.timeOption}>

			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	timeOption: {
		width: optionsSize,
		height: optionsSize,
		borderRadius: 3,
		backgroundColor: '#181818'
	},
	row: {
		width: constants.width-27,
		marginVertical: 4,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	labelContainer: {
		height: optionsSize,
		width: optionsSize,
		alignItems: 'center',
		justifyContent: 'center',
	}
})


