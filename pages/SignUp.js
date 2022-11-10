import { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import ButtonCustom from '../components/Button';
import Header from '../components/Header'
import TextInputBox from '../components/TextInput'
import Icon from 'react-native-vector-icons/Ionicons';

export default function LogIn({navigation}) {
  const [username, changeUsername] = useState(null);
  const [email, changeEmail] = useState(null);
  const [password, changePassword] = useState(null);
  const [upperAndLowerExist, setUpperAndLowerExist] = useState(false);
  const [numberExists, setNumberExists] = useState(false);
  const [specialExists, setSpecialExists] = useState(false);
  const [eightCharsExist, setEightCharsExist] = useState(false);

  const onChangePassword = async text => {
    await changePassword(text);
    await checkPasswordIsValid();
  }

  const checkPasswordIsValid = text => {
    changePassword(text);
    let upper = 0, lower = 0, special = 0, num = 0
    const specialChars = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);

    for (let char of text) {
      if (!isNaN(char)) num++;
      else {
        if (char.toUpperCase() == char) upper++;
        if (char.toLowerCase() == char) lower++;
        if (specialChars.test(char)) special++;
      }
    }
    
    upper >= 1 && lower >= 1 ? setUpperAndLowerExist(true) : setUpperAndLowerExist(false)
    special >= 1 ? setSpecialExists(true) : setSpecialExists(false)
    num >= 1 ? setNumberExists(true) : setNumberExists(false)
    text.length >= 8 ? setEightCharsExist(true) : setEightCharsExist(false)
    

    // return upper>=1 && lower >= 1 && special >= 1 && num >= 1 && upper + lower + num + special >= 8
    return upperAndLowerExist && specialExists && numberExists && eightCharsExist
  }

  const onSignInClick = () => {if (username == "Hijazi" && password == "123") props.toggleSignIn(true);}

  return (
    <View style={styles.container}>
        <View style={{flex: .9, justifyContent: 'center'}}>
            <Header size={42} margin={3}>Let's Get Started</Header>
            <Header size={12} margin={3} align='flex-start'>Please enter your details</Header>
        </View>
        <View style={{flex: 2.9, justifyContent: 'space-between'}}>
          <View>
            <TextInputBox placeholder="Enter your username" margin={3} label="Username" onChange={changeUsername}/>
            <TextInputBox placeholder="Enter your email address" margin={3} label='Email' onChange={changeEmail}/>
            <View style={{margin: 3}}>
              <Header size={15} margin={12} weight='600'>Password</Header>
              
              <View style={{margin: 3, marginLeft: 10, flexDirection: 'row', alignItems: 'center', opacity: eightCharsExist ? 1 : 0.7}}>
                <Icon name={"checkmark-circle-sharp"} size={23} color="#FFF"/>
                <Header size={10} margin={3} weight={"400"}> 8 characters minimum</Header>
              </View>

              <View style={{margin: 3, marginLeft: 10, flexDirection: 'row', alignItems: 'center', opacity: upperAndLowerExist ? 1 : 0.7}}>
                <Icon name={"checkmark-circle-sharp"} size={23} color="#FFF"/>
                <Header size={10} margin={3} weight={"400"}> An uppercase and a lower case letter</Header>
              </View>

              <View style={{margin: 3, marginLeft: 10, flexDirection: 'row', alignItems: 'center', opacity: numberExists ? 1 : 0.7}}>
                <Icon name={"checkmark-circle-sharp"} size={23} color="#FFF"/>
                <Header size={10} margin={3} weight={"400"}> A number</Header>
              </View>

              <View style={{margin: 3, marginLeft: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center', opacity: specialExists ? 1 : 0.7}}>
                <Icon name={"checkmark-circle-sharp"} size={23} color="#FFF"/>
                <Header size={10} margin={3} weight={"400"}> A special character</Header>
              </View>


              <TextInputBox noLabel placeholder="Create your password" margin={3} onChange={checkPasswordIsValid}/>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 20, flex: .7, justifyContent: 'center'}}>
          <ButtonCustom onClick={onSignInClick} size={16} weight={"600"}>Sign Up</ButtonCustom>
          <View style={{flexDirection: 'row', margin: 20}}>
            <Header size={10}>Already have an account? </Header>
            <Header size={10} color={"#2846c4"} onPress={() =>navigation.navigate('LogIn')}>Sign In</Header>
          </View>
        </View>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    color: "#f1f1f1",
    fontSize: "35",
    fontWeight: "bold"
  }
});