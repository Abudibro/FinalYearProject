import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Nav from './components/Nav';

const Stack = createNativeStackNavigator();

export default function App() {
  const [nav, changeNav] = useState(-1);
  const [isSignedIn, toggleSignIn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'} contentContainerStyle={{flex:1}}>
        <NavigationContainer>
          
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="LogIn" component={LogIn} options={{changeNav: changeNav}}  />
            <Stack.Screen name="SignUp" component={SignUp} options={{changeNav: changeNav}}/>
            <Stack.Screen name="Home" component={Home} options={{changeNav: changeNav}}/>
          </Stack.Navigator>

        </NavigationContainer>
      </KeyboardAwareScrollView>
      <Nav nav={nav} changeNav={changeNav} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  }
});
