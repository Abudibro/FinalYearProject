// import { StyleSheet, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewListing from '../pages/ViewListing';
import NewListing from '../pages/NewListing';
import PickLocation from '../pages/BuyingItem/PickLocation';
import PickTime from '../pages/BuyingItem/PickTime';
import ReviewMeetup from '../pages/BuyingItem/ReviewMeetup';
import PurchaseConfirmation from '../pages/BuyingItem/Confirmation';

const Stack = createNativeStackNavigator();

export default function ViewListingRouter({route}) {

	const { listingId, userOwnsListing } = route.params;
	// const listingId = '', userOwnsListing = true;

  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="view-listing" component={ViewListing} initialParams={{listingId, userOwnsListing}} />
			<Stack.Screen name="purchase-confirmation" component={PurchaseConfirmation} />
      <Stack.Screen name="pick-location" component={PickLocation} />
      <Stack.Screen name="new-listing" component={NewListing} />
			<Stack.Screen name="review-meetup" component={ReviewMeetup} />
			<Stack.Screen name="pick-time" component={PickTime} />
    </Stack.Navigator>
  );
} 