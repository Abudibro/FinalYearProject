import { View, StyleSheet } from "react-native";

export default function TitleSection(props) {
	return (
		<View style={styles.container}>
			{props.children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 140,
		alignItems: 'center',
		justifyContent: 'flex-end'
	}
})