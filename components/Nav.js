import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dimensions } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import HomeRouter from '../Routers/HomeRouter';
import LikedListings from '../pages/LikedListings';
import UpcomingMeetups from '../pages/UpcomingMeetups';
import Account from '../pages/Account';

import constants from '../global';

const Tab = createBottomTabNavigator();

export default function Nav() {

    const screenOptions = {
        unmountOnBlur: false,
        headerShown: false,
        tabBarStyle:{
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: 'black',
            borderRadius: 50,
            height: 60,
            width: constants.width,
            left: (Dimensions.get('window').width * 0.075) - 2,
            shadowOffset: {width: -2, height: 4},  
            shadowColor: '#000',  
            shadowOpacity: 0.3,  
            shadowRadius: 3, 
        },
        tabBarActiveTintColor: '#2846c4',
        tabBarInactiveTintColor: '#848484',
        tabBarShowLabel: false
    }

    return (
    <NavigationContainer independent={true} theme={{colors: '#0d0d0d'}} >
      <Tab.Navigator {...{ screenOptions }} >
        <Tab.Screen name="home" component={HomeRouter} options={{ tabBarIcon: ({ focused }) => <Entypo name='home' size={35} color={focused ? '#2846c4' : '#848484'} /> }} />
        <Tab.Screen name="liked-listings" options={{ tabBarIcon: ({ focused }) => <AntDesign name='heart' size={35} color={focused ? '#2846c4' : '#848484'} /> }} component={LikedListings} />
        <Tab.Screen name="upcoming-meetups" options={{ tabBarIcon: ({ focused }) => <FontAwesome5 name='calendar-alt' size={35} color={focused ? '#2846c4' : '#848484'} /> }}  component={UpcomingMeetups} />
        <Tab.Screen name="account" options={{ tabBarIcon: ({ focused }) => <FontAwesome5 name='user-circle' size={35} color={focused ? '#2846c4' : '#848484'} /> }} component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}