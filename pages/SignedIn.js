import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Home from './Home';
import Nav from '../components/Nav'
import NewListing from './NewListing'

const Stack = createNativeStackNavigator();

export default function SignedIn() {
    const [nav, changeNav] = useState(5);
    return(
        <>
            <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'} contentContainerStyle={{flex:1}} style={{backgroundColor: '#0d0d0d'}}>
                <Stack.Navigator screenOptions={{headerShown: false}}>

                    <Stack.Screen name="Main Page">
                        {
                            nav == 1 ?
                            (props) => <Home {...props} changeNav={changeNav} />
                            
                            : nav == 2 ?
                            (props) => <LikedItems {...props} changeNav={changeNav} />

                            : nav == 3 ?
                            (props) => <MeetUps {...props} changeNav={changeNav} />

                            : nav == 4 ?
                            (props) => <Account {...props} changeNav={changeNav} />

                            : nav == 5 ?
                            (props) => <NewListing {...props} changeNav={changeNav} nav={nav}/>

                            : null
                        }
                    </Stack.Screen>
                    {/* <Stack.Screen name='View Listing'>
                        {(props) => <ViewListing {...props} changeNav={changeNav} />}
                    </Stack.Screen> */}
                    {/* <Stack.Screen name='Search'>
                        {(props) => <Search {...props} changeNav={changeNav} />}
                    </Stack.Screen> */}

                </Stack.Navigator>
            </KeyboardAwareScrollView>
            <Nav nav={nav} changeNav={changeNav} />
        </>
    )
}
  