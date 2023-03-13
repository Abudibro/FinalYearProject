import { useState } from "react"
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native"

import ButtonCustom from "../components/Button";
import TitleSection from "../components/TitleSection";
import Header from "../components/Header";
import TextInputBox from "../components/TextInput";

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons';

import constants from "../global";

export default function ChangePassword({navigation}) {
	const [oldPassword, setOldPassword] = useState(null);
	const [hideOldPassword, setHideOldPassword] = useState(true);
	const [newPassword, setNewPassword] = useState(null);
	const [hideNewPassword, setHideNewPassword] = useState(true);
	const [confirmNewPassword, setConfirmNewPassword] = useState(null);
	const [hideConfirmNewPassword, setHideConfirmNewPassword] = useState(true);
	const [upperAndLowerExist, setUpperAndLowerExist] = useState(false);
  const [numberExists, setNumberExists] = useState(false);
  const [specialExists, setSpecialExists] = useState(false);
  const [eightCharsExist, setEightCharsExist] = useState(false);

	const onSetNewPasswordClick = () => {}

	const checkPasswordIsValid = text => {
    setNewPassword(text);
    let upper = 0, lower = 0, special = 0, num = 0

    for (let char of text) {
      !isNaN(char) ? num++
      : /^[A-Z]*$/.test(char) ? upper++
      : /^[a-z]*$/.test(char) ? lower++
      : /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(char) ? special++
      : null
    }
    
    upper >= 1 && lower >= 1 ? setUpperAndLowerExist(true) : setUpperAndLowerExist(false)
    special >= 1 ? setSpecialExists(true) : setSpecialExists(false)
    num >= 1 ? setNumberExists(true) : setNumberExists(false)
    text.length >= 8 ? setEightCharsExist(true) : setEightCharsExist(false)

    return upperAndLowerExist && specialExists && numberExists && eightCharsExist
  }

	console.log(newPassword != confirmNewPassword)
	console.log(newPassword)
	console.log(confirmNewPassword)

	const isSaveNewPasswordDisabled = () => !checkPasswordIsValid() || (newPassword != confirmNewPassword)

	return (
		<ScrollView bounces={false} style={styles.container} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}} >
			<TitleSection jC ={'center'}>
				<Header width={constants.width} center size={28} >Change my password</Header>
			</TitleSection>

			<TextInputBox
				label='Old password'
				placeholder="Enter your old password"
				margin={3}
				onChange={setOldPassword}
				showPassword={hideOldPassword}
				icon={hideOldPassword ? Eye : EyeWithLine}
				toggleHidePassword={setHideOldPassword}
				iconColor={"#848484"}
				noBorder
			/>

			{/* Password */}
			<View style={{margin: 3, marginTop: 30}}>
				<Header size={15} marginV={10} weight='600' paddingLeft={19} >New PasswordPassword</Header>
				
				<View style={{margin: 3, marginLeft: 19, flexDirection: 'row', alignItems: 'center', opacity: eightCharsExist ? 1 : 0.7}}>
					{
						Checkmark(23, "#FFF")
					}
					<Header size={10} margin={3} weight={"400"}> 8 characters minimum</Header>
				</View>

				<View style={{margin: 3, marginLeft: 19, flexDirection: 'row', alignItems: 'center', opacity: upperAndLowerExist ? 1 : 0.7}}>
					{
						Checkmark(23, "#FFF")
					}
					<Header size={10} margin={3} weight={"400"}> An uppercase and a lower case letter</Header>
				</View>

				<View style={{margin: 3, marginLeft: 19, flexDirection: 'row', alignItems: 'center', opacity: numberExists ? 1 : 0.7}}>
					{
						Checkmark(23, "#FFF")
					}
					<Header size={10} margin={3} weight={"400"}> A number</Header>
				</View>

				<View style={{margin: 3, marginLeft: 19, marginBottom: 10, flexDirection: 'row', alignItems: 'center', opacity: specialExists ? 1 : 0.7}}>
					{
						Checkmark(23, "#FFF")
					}
					<Header size={10} margin={3} weight={"400"}> A special character</Header>
				</View>

				<TextInputBox
					noLabel
					placeholder="Enter your new password"
					margin={3}
					onChange={checkPasswordIsValid}
					showPassword={hideNewPassword}
					icon={hideNewPassword ? Eye : EyeWithLine}
					toggleHidePassword={setHideNewPassword}
					iconColor={"#848484"}
					noBorder
				/>

			</View>

			<TextInputBox
			marginT={30}
				label='Confirm new password'
				placeholder="Enter your new password"
				margin={3}
				onChange={setConfirmNewPassword}
				showPassword={hideConfirmNewPassword}
				icon={hideConfirmNewPassword ? Eye : EyeWithLine}
				toggleHidePassword={setHideConfirmNewPassword}
				iconColor={"#848484"}
				noBorder
			/>

			<ButtonCustom disabled={isSaveNewPasswordDisabled} size={16} weight={"600"} marginTop={30} marginBottom={constants.MARGIN_BOTTOM} onClick={() => onSetNewPasswordClick()} >Save Password</ButtonCustom>
		</ScrollView>
	)
}
const Checkmark = (size, color, style) => {return (<Ionicons name={"checkmark-circle-sharp"} size={size} color={color} style={style} />)}
const EyeWithLine = (size, color, style, toggleHidePassword) => {return (
	<TouchableOpacity style={style} onPress={() => toggleHidePassword(true)}>
		<Entypo name={"eye-with-line"} size={size} color={color} />
	</TouchableOpacity>
)}
const Eye = (size, color, style, toggleHidePassword) => {return (
	<TouchableOpacity style={style} onPress={() => toggleHidePassword(false)}>
		<Entypo name={"eye"} size={size} color={color} />
	</TouchableOpacity>
)}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0d0d0d',
	},
})