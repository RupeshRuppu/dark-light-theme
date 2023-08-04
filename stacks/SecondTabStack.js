import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SecondTabScreen from '../screens/SecondTabScreen';

const Stack = createNativeStackNavigator();

export default function SecondTabStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SecondTabScreen">
      <Stack.Screen name="SecondTabScreen" component={SecondTabScreen} />
    </Stack.Navigator>
  );
}
