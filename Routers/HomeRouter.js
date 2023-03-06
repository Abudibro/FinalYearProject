// import { StyleSheet, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import SearchResult from '../pages/SearchResult';
import PreviewListing from '../pages/PreviewListing';
import ViewListingRouter from './ViewListingRouter';
import NewListing from '../pages/NewListing';

const Stack = createNativeStackNavigator();

export default function HomeRouter() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="view-listing-router" component={ViewListingRouter} />
      <Stack.Screen name="home-main" component={Home} />
      <Stack.Screen name="new-listing" component={NewListing} />
      <Stack.Screen name="preview-listing" component={PreviewListing} />
      <Stack.Screen name="search-result" component={SearchResult} />
    </Stack.Navigator>
  );
}