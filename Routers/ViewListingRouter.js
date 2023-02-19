// import { StyleSheet, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewListing from '../pages/ViewListing';
import NewListing from '../pages/NewListing';
import PickLocation from '../components/BuyingItem/PickLocation';

const Stack = createNativeStackNavigator();

export default function ViewListingRouter({route}) {

	const { id, userOwnsListing } = route.params;

  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="view-listing" id={id} userOwnsListing={userOwnsListing} component={ViewListing} />
      <Stack.Screen name="new-listing" component={NewListing} />
      <Stack.Screen name="pick-location" component={PickLocation} />
    </Stack.Navigator>
  );
}