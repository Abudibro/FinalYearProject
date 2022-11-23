import { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import ButtonCustom from '../components/Button';
import Header from '../components/Header'
import TextInputBox from '../components/TextInput'

export default function LogIn({navigation}) {

  const [username, changeUsername] = useState(null);
  const [password, changePassword] = useState(null);

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
            <TextInputBox placeholder="Enter your password" margin={3} label='Password' onChange={changePassword}/>
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