import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import constants from '../global'
import Header from './Header';

const numberWrapperSize = (constants.width - 80) / 6;

function SixDigitCode({code}) {

	const renderNumbers = () => {
		return (
			code.split('').map((num, i) => {
				return (
					<View style={styles.numberBox} key={i} >
						<Header size={numberWrapperSize-15} color='#f1f1f1' >{num}</Header>
					</View>
				)
			})
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

	return (
		<View style={styles.container} >
			{renderNumbers()}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: constants.width,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 30
	},
	numberBox: {
		height: 60,
		width: numberWrapperSize,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#181818',
		borderRadius: 10
	}
})

export default SixDigitCode
