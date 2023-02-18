import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import ButtonCustom from '../components/Button';
import Header from '../components/Header'
import TextInputBox from '../components/TextInput'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import TitleSection from '../components/TitleSection';

export default function SignUp({navigation}) {

  const [username, changeUsername] = useState(null);
  const [email, changeEmail] = useState(null);
	const [addressLineOne, setAddressLineOne] = useState(null);
	const [addressLineTwo, setAddressLineTwo] = useState(null);
	const [postCode, setPostCode] = useState(null);
	const [city, setCity] = useState(null);
  const [password, changePassword] = useState(null);
  const [hidePassword, toggleHidePassword] = useState(true);
  const [upperAndLowerExist, setUpperAndLowerExist] = useState(false);
  const [numberExists, setNumberExists] = useState(false);
  const [specialExists, setSpecialExists] = useState(false);
  const [eightCharsExist, setEightCharsExist] = useState(false);

  const checkUsernameIsValid = () => {
    if (username == null) return null
    return username.length >= 3 && username.length <= 10;
  }
  
  const checkPasswordIsValid = text => {
    changePassword(text);
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

  const checkEmailIsValid = () => {
    if (!email) return null
    else return (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email))
  }

  const onSignUpClick = () => {
    if (username == "Hijazi" && password == "Test1234!") navigation.navigate('SignedIn');
  }

	const isSignUpButtonDisabled = () => {
		return !(
			checkUsernameIsValid()
			&& checkEmailIsValid()
			&& upperAndLowerExist
			&& specialExists
			&& numberExists
			&& eightCharsExist
		)
	}

  const Checkmark = (size, color, style) => {return (<Ionicons name={"checkmark-circle-sharp"} size={size} color={color} style={style} />)}
  const Cross = (size, color, style) => {return (<Entypo name={"circle-with-cross"} size={size} color={color} style={style} />)}
  const EyeWithLine = (size, color, style) => {return (
    <TouchableOpacity style={style} onPress={() => toggleHidePassword(true)}>
      <Entypo name={"eye-with-line"} size={size} color={color} />
    </TouchableOpacity>
  )}
  const Eye = (size, color, style) => {return (
    <TouchableOpacity style={style} onPress={() => toggleHidePassword(false)}>
      <Entypo name={"eye"} size={size} color={color} />
    </TouchableOpacity>
  )}


  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
			
			{/* Header Section */}
			<TitleSection left>
        <Header size={42} >Let's Get Started</Header>
        <Header size={12} marginT={5} align='flex-start'>Please enter your details</Header>
			</TitleSection>
			
			<View style={{height: 50, alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
				<Header color="#848484" size={12} align='flex-start'>All fields marked with * are required</Header>
			</View>

			{/* Input Section */}
      <View >

				{/* Username */}
				<TextInputBox placeholder="Enter your username"
					marginT={20}
					margin={3}
					label="Username *"
					icon={checkUsernameIsValid() ? Checkmark : checkUsernameIsValid() != null ? Cross : null}
					iconColor={checkUsernameIsValid() ? "#019501" : checkUsernameIsValid() != null ? "#b30000" : null}
					onChange={changeUsername}
				/>

				{/* Email Address */}
				<TextInputBox placeholder="Enter your email address"
					margin={3}
					marginT={30}
					label='Email *'
					icon={checkEmailIsValid() ? Checkmark : checkEmailIsValid() != null ? Cross : null}
					iconColor={checkEmailIsValid() ? "#019501" : checkEmailIsValid() != null ? "#b30000" : null}
					onChange={changeEmail}
				/>
{/* 
				<TextInputBox placeholder="Address Line 1 *"
					margin={3}
					marginT={30}
					label='Home Address'
					onChange={setAddressLineOne}
				/>

				<TextInputBox placeholder="Address Line 2"
					margin={3}
					noLabel
					onChange={setAddressLineTwo}
				/>

				<TextInputBox placeholder="Post Code *"
					margin={3}
					noLabel
					onChange={setPostCode}
				/>

				<TextInputBox placeholder="City *"
					margin={3}
					noLabel
					onChange={setCity}
				/> */}


				{/* Password */}
				<View style={{margin: 3, marginTop: 30}}>
					<Header size={15} marginV={10} weight='600' paddingLeft={19} >Password *</Header>
					
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
						placeholder="Create your password"
						margin={3}
						onChange={checkPasswordIsValid}
						showPassword={hidePassword}
						icon={hidePassword ? Eye : EyeWithLine}
						iconColor={"#848484"}
						noBorder
					/>

        </View>

      </View>

			{/* Button and Sign In */}
      <View style={{alignItems: 'center', marginTop: 20, justifyContent: 'center'}}>
        <ButtonCustom onClick={onSignUpClick} size={16} weight={"600"} disabled={isSignUpButtonDisabled} >Sign Up</ButtonCustom>
        <View style={{flexDirection: 'row', margin: 20}}>
          <Header size={10}>Already have an account? </Header>
          <Header size={10} color={"#2846c4"} onPress={() => navigation.navigate('LogIn')}>Sign In</Header>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: '#0d0d0d'
	},
  header: {
    color: "#f1f1f1",
    fontSize: "35",
    fontWeight: "bold"
  }
});