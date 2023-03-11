import { View, StyleSheet } from "react-native";
import constants from "../global";

export default function TitleSection(props) {

	const styles = StyleSheet.create({
		container: {
			height: 140,
			width: constants.width,
			alignItems: props.left ? 'flex-start' : 'center',
			justifyContent: props.jC ? props.jC : 'flex-end'
		}
	})

	return (
		<View style={styles.container}>
			{props.children}
		</View>
	)
}
