import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ThirdTabScreen from '../screens/ThirdTabScreen';

const Stack = createNativeStackNavigator();

export default function ThirdTabStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ThirdTabScreen">
      <Stack.Screen name="ThirdTabScreen" component={ThirdTabScreen} />
    </Stack.Navigator>
  );
}
