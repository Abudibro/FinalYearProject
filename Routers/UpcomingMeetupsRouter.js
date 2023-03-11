import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpcomingMeetups from '../pages/UpcomingMeetups';
import ViewListingRouter from './ViewListingRouter';

const Stack = createNativeStackNavigator();

export default function UpcomingMeetupsRouter() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
			<Stack.Screen name="up-coming-main" component={UpcomingMeetups} />
      <Stack.Screen name="view-listing-router" component={ViewListingRouter}  />
    </Stack.Navigator>
  );
} 