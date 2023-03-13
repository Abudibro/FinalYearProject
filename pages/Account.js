import { StyleSheet, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import TitleSection from "../components/TitleSection";
import ButtonCustom from "../components/Button";

import constants from "../global";

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Account({route, navigation}) {

	const { rootNavigation } = route.params;

	return (
		<View style={styles.container} >
			<TitleSection jC ={'center'}>
				<Header width={constants.width} center size={28} >Account</Header>
			</TitleSection>

			<View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginBottom: constants.MARGIN_BOTTOM}}>
				<View style={{flex: .5, flexDirection: 'column', justifyContent: 'space-between'}} >


					{/* Button change password */}
					<Button onPress={() => navigation.navigate('change-password')} >Change my password</Button>

				</View>


				<ButtonCustom weight={'700'} bg={'#a81811'} color='#d6afae' onClick={() => rootNavigation.navigate("LogIn")} >Log Out</ButtonCustom>

			</View>
		</View>
	)
}

const RightArrow = () => {
 return <AntDesign name='right' size={17} color='#f1f1f1' style={{marginRight: 15}} />
}

const Button  = ({ onPress, children}) => {
	return (
		<TouchableOpacity style={styles.button}
		activeOpacity={.7}
		onPress={onPress}>
				<Text style={{color: '#f1f1f1', alignSelf: 'center', fontWeight: '500', marginLeft: 15}}>
						{children}
				</Text>
				<RightArrow />
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0d0d0d',
		alignItems: 'center',
		// justifyContent: 'center'
	},
	button: {
		width: constants.width,
		height: 57,
		backgroundColor: '#181818',
		borderRadius: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
})