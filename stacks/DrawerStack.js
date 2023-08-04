import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabsStackNavigator from './BottomStack';
import {ScrollView, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useSwipeContext} from './RootStack';
import Icon from 'react-native-vector-icons/AntDesign';

const DrawerStack = createDrawerNavigator();

export default function DrawerStackContainer({navigation}) {
  const {enabled} = useSwipeContext();
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: enabled,
        drawerType: 'front',
      }}
      drawerContent={props => (
        <CustomDrawer navigation={navigation} {...props} />
      )}
      initialRouteName="BottomtabsStacknavigator">
      <DrawerStack.Screen
        name="BottomtabsStacknavigator"
        component={BottomTabsStackNavigator}
      />
    </DrawerStack.Navigator>
  );
}

function CustomDrawer({navigation}) {
  const {navigationRef} = useSwipeContext();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Icon
        onPress={() => navigation.closeDrawer()}
        name="close"
        size={26}
        style={{marginVertical: 10, paddingHorizontal: 10}}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 12, paddingVertical: 4}}>
        {Array.from({length: 20}, (_, index) => index + 1).map(
          (item, index) => (
            <TouchableOpacity
              onPress={() => {
                if ((index + 1) % 3 === 1)
                  navigationRef.current.navigate('Home');
                if ((index + 1) % 3 === 2)
                  navigationRef.current.navigate('Profile');
                if ((index + 1) % 3 === 0)
                  navigationRef.current.navigate('Contacts');
              }}
              key={item}
              style={{
                marginVertical: 5,
                backgroundColor: '#DE5E69CC',
                paddingHorizontal: 10,
                height: 40,
                justifyContent: 'center',
                borderRadius: 4,
              }}>
              <Text style={{fontSize: 16, fontWeight: '600'}}>
                ITEM - {item}
              </Text>
            </TouchableOpacity>
          ),
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
