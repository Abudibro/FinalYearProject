import React from 'react'
import { StyleSheet, View } from 'react-native'
import TimePicker from '../../components/TimePicker'

const PickTime = () => {
	return (
		<View style={styles.container}>
			<TimePicker />
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
})

export default PickTime;
