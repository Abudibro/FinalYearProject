import { View, StyleSheet } from "react-native";

export default function TitleSection(props) {

	const styles = StyleSheet.create({
		container: {
			height: 140,
			alignItems: props.left ? 'flex-start' : 'center',
			justifyContent: 'flex-end'
		}
	})

	return (
		<View style={styles.container}>
			{props.children}
		</View>
	)
}
