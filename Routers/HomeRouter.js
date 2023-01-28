// import { StyleSheet, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import SearchResult from '../pages/SearchResult';
import PreviewListing from '../pages/PreviewListing';
import ViewListing from '../pages/ViewListing';
import NewListing from '../pages/NewListing';

const Stack = createNativeStackNavigator();

export default function HomeRouter() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="home-main" component={Home} />
      <Stack.Screen name="new-listing" component={NewListing} />
      <Stack.Screen name="search-result" component={SearchResult} />
      <Stack.Screen name="preview-listing" component={PreviewListing} />
      <Stack.Screen name="view-listing" component={ViewListing} />
    </Stack.Navigator>
  );
}

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#0d0d0d',
// }
// });
