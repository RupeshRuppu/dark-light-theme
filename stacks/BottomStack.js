import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSwipeContext} from './RootStack';
import AppStack from './AppStack';
import SecondTabStack from './SecondTabStack';
import ThirdTabStack from './ThirdTabStack';
import {THEME_TYPES, useThemeContext} from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/AntDesign';

const BottomTabs = createBottomTabNavigator();

export default function BottomTabsStackNavigator() {
  const {setEnabled} = useSwipeContext();
  const {theme} = useThemeContext();

  return (
    <>
      <BottomTabs.Navigator
        screenListeners={{
          state: e => {
            const index = e.data.state.index;
            setEnabled(!index);
          },
        }}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: theme === THEME_TYPES.DARK ? '#121212' : '#FFF',
            height: 60,
            borderTopWidth: 0,
          },
        }}
        initialRouteName="AppStack">
        <BottomTabs.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="home"
                size={24}
                color={focused ? '#DE5E69' : '#444'}
              />
            ),
            tabBarLabelStyle: {
              display: 'none',
            },
          }}
          name="AppStack"
          component={AppStack}
        />
        <BottomTabs.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="rocket1"
                size={24}
                color={focused ? '#DE5E69' : '#444'}
              />
            ),
            tabBarLabelStyle: {
              display: 'none',
            },
          }}
          name="SecondTabStack"
          component={SecondTabStack}
        />
        <BottomTabs.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="shoppingcart"
                size={24}
                color={focused ? '#DE5E69' : '#444'}
              />
            ),
            tabBarLabelStyle: {
              display: 'none',
            },
          }}
          name="ThirdTabStack"
          component={ThirdTabStack}
        />
      </BottomTabs.Navigator>
    </>
  );
}
