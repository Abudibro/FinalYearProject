import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Nav from './components/Nav';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, toggleSignIn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'} contentContainerStyle={{flex: 1}} bounces={false}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
            
            <Stack.Screen name="SignedIn" component={Nav} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />

          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAwareScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  }
});
