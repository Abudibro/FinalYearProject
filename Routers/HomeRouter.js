// import { StyleSheet, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import SearchResult from '../pages/SearchResult';
import PreviewListing from '../pages/PreviewListing';
import ViewListingRouter from './ViewListingRouter';
import NewListing from '../pages/NewListing';
import SearchFilters from '../pages/SearchFilters';
import constants from '../global';

const Stack = createNativeStackNavigator();

export default function HomeRouter() {
	const intialSelectedTimes = 
	[
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ]
	];

  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
			<Stack.Screen name="home-main" component={Home} />
      <Stack.Screen name="search-result" component={SearchResult} initialParams={{
				minPrice: 0,
				maxPrice: null,
				selectedLocations: [],
				selectedTimes: intialSelectedTimes
			}} />
      <Stack.Screen name="view-listing-router" component={ViewListingRouter} />
      <Stack.Screen name="new-listing" component={NewListing} />
      <Stack.Screen name="preview-listing" component={PreviewListing} />
			<Stack.Screen name="search-filters" component={SearchFilters} />
    </Stack.Navigator>
  );
}