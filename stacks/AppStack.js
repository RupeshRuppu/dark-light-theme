import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import {useEffect} from 'react';
import {useSwipeContext} from './RootStack';

const Stack = createNativeStackNavigator();

export default function AppStack({navigation}) {
  const {navigationRef} = useSwipeContext();

  useEffect(() => {
    navigationRef.current = navigation;
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Contacts" component={Contacts} />
    </Stack.Navigator>
  );
}
