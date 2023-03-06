import React, { useState, memo } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import constants from '../global'
import Header from './Header';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const optionsSize = (constants.width - 27 - (8 * 12)) / 13;
const timesLabels = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const dayLabels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']


export default function TimePicker({times, setTimes, meetUpTime}) {
	const [intialDragSquare, setInitialDragSquare] = useState(null);

	const panGesture = Gesture.Pan()
	.onBegin(e => {
		const i = Math.trunc(e.y / (optionsSize + 8));
		const j = Math.trunc(e.x / (optionsSize + 8));

		setInitialDragSquare({i, j})
	})
	.onEnd(e => {
		var
			iEnd = Math.trunc(e.y / (optionsSize + 8)),
			jEnd = Math.trunc(e.x / (optionsSize + 8));

		if (iEnd > 6) iEnd = 6;
		if (jEnd > 12) jEnd = 12;

		const initialRow = intialDragSquare.i <= iEnd ? intialDragSquare.i : iEnd;
		const destRow = intialDragSquare.i <= iEnd ? iEnd : intialDragSquare.i;
		const initialCol = intialDragSquare.j <= jEnd ? intialDragSquare.j : jEnd;
		const destCol = intialDragSquare.j <= jEnd ? jEnd : intialDragSquare.j;
		const newTimes  = [...times];

		for (let i = initialRow; i < destRow + 1; i++) {
			for (let j = initialCol; j < destCol + 1; j++) {
				newTimes[i][j] = !newTimes[i][j]
			}
		}

		setTimes(newTimes);
	})


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
				{	meetUpTime ?
					renderOptions(times, setTimes, meetUpTime)
					:
					<GestureDetector gesture={panGesture}>
						{renderOptions(times, setTimes, meetUpTime)}
					</GestureDetector>
				}
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

const renderOptions = (times, setTimes, meetUpTime) => {
	const OPTION_COLOR = (i, j) => {
		if (meetUpTime) {
			if (meetUpTime.i === i && meetUpTime.j == j) return {backgroundColor: '#2846c4'}
			if (times[i][j]) return {backgroundColor: '#363636'}
		} else {
			if (times[i][j]) return styles.clicked; 
		}

		return
	}

	const onOptionPress = (i, j) => {
		if (meetUpTime) {
			if (!times[i][j]) return
			if (meetUpTime.i === i && meetUpTime.j == j) setTimes({i: null, j: null})
			else setTimes({i, j})
		}
		else {
			const newTimes = [...times];
			newTimes[i][j] = !newTimes[i][j];
			setTimes(newTimes);
		}
	}

	return (
		<View>
			{times.map((row, i) => {
				return (
					<View style={styles.row} key={i}>
						{row.map((time, j) => {
							return (
								<TouchableOpacity
								key={j}
									style={[styles.timeOption, OPTION_COLOR(i, j)]}
									activeOpacity={.7}
									onPress={() => onOptionPress(i, j)}
								/>
							)
						})}
					</View>
				)
			})}
		</View>
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
	},
	clicked: {
		backgroundColor: '#f1f1f1'
	}
})


