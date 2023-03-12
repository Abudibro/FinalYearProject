import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LikedListings from '../pages/LikedListings'
import ViewListingRouter from './ViewListingRouter';

const Stack = createNativeStackNavigator();

export default function LikedListingsRouter() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
			<Stack.Screen name="liked-listings-main" component={LikedListings} />
      <Stack.Screen name="view-listing-router" component={ViewListingRouter}  />
    </Stack.Navigator>
  );
} 