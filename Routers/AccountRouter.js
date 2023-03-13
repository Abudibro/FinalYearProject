import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../pages/Account';
import ChangePassword from '../pages/ChangePassword';

const Stack = createNativeStackNavigator();

export default function AccountRouter({route}) {

  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
			<Stack.Screen name="account-main" component={Account} initialParams={{rootNavigation: route.params.rootNavigation}}/>
      <Stack.Screen name="change-password" component={ChangePassword}  />
    </Stack.Navigator>
  );
} 