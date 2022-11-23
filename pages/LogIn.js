import { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import ButtonCustom from '../components/Button';
import Header from '../components/Header'
import TextInputBox from '../components/TextInput'
import Entypo from 'react-native-vector-icons/Entypo'

export default function LogIn({navigation, changeNav}) {

  useEffect(() => changeNav(-1), [])

  const [username, changeUsername] = useState(null);
  const [password, changePassword] = useState(null);
  const [hidePassword, toggleHidePassword] = useState(true);

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

  const onSignInClick = () => {if (username == 'Hijazi' && password == "123") navigation.navigate('Home') }
  
  return (
    <View style={styles.container}>
        <View style={{flex: 1.5, justifyContent: 'center'}}>
            <Header size={45} margin={3}>Welcome Back,</Header>
            <Header size={12} margin={3} align='flex-start'>Please sign in to continue</Header>
        </View>
        <View style={{flex: 2.7, justifyContent: 'space-between'}}>
          <View>
            <TextInputBox placeholder="Enter your username" margin={3} label="Username" onChange={changeUsername}/>
            <TextInputBox
              label='Password'
              placeholder="Enter your password"
              margin={3}
              onChange={changePassword}
              showPassword={hidePassword}
              icon={hidePassword ? Eye : EyeWithLine}
              iconColor={"#848484"}
              noBorder
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <ButtonCustom onClick={onSignInClick} size={16} weight={"600"}>Sign In</ButtonCustom>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Header size={10}>Don't have an account? </Header>
              <Header size={10} color={"#2846c4"} onPress={() =>navigation.navigate('SignUp')}>Sign Up</Header>
            </View>
          </View>
        </View>
        <View style={{flex: .7}}>
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