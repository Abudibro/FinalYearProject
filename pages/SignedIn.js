import { useState } from 'react';
import { SafeAreaView } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Home from './Home';
import Nav from '../components/Nav'

const Stack = createNativeStackNavigator();

export default function SignedIn() {
    const [nav, changeNav] = useState(1);
    return(
        // <SafeAreaView>
        <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'} contentContainerStyle={{flex:1}}>
            {/* <NavigationContainer> */}
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Home" >
                        {(props) => <Home {...props} changeNav={changeNav} />}
                    </Stack.Screen>

                </Stack.Navigator>
            {/* </NavigationContainer> */}
            <Nav nav={nav} changeNav={changeNav} />
            </KeyboardAwareScrollView>
        // </SafeAreaView>
    )
}
  