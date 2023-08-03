import {Text, View, TextInput, TouchableOpacity, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
import {THEME_TYPES, useThemeContext} from '../contexts/ThemeContext';
import Colors from '../colors';
import {saveKeyInStorage} from '../storage';

const Home = ({navigation}) => {
  const {theme, dispatch} = useThemeContext();
  const [isEnabled, setIsEnabled] = useState(theme === THEME_TYPES.DARK);

  useEffect(() => {
    dispatch(isEnabled ? {type: THEME_TYPES.DARK} : {type: THEME_TYPES.LIGHT});
    /* Also, we have to store theme value in local storage.*/
    saveKeyInStorage('THEME', isEnabled ? THEME_TYPES.DARK : THEME_TYPES.LIGHT);
  }, [isEnabled]);

  const toggleSwitch = () => {
    setIsEnabled(p => !p);
  };

  const colors =
    theme === THEME_TYPES.DARK ? Colors.dark.colors : Colors.light.colors;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.themeColor,
        padding: 20,
      }}>
      <Text style={{color: colors.white}}>
        This is demo of default dark/light theme using navigation.
      </Text>
      <TextInput
        style={{
          borderColor: colors.gray,
          padding: 10,
          borderWidth: 2,
          borderRadius: 5,
          width: '100%',
          marginTop: 20,
          color: colors.white,
        }}
        placeholder="Type here"
      />
      <TouchableOpacity
        style={{
          backgroundColor: colors.sky,
          padding: 10,
          borderRadius: 6,
          width: '100%',
          height: 57,
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: colors.commonWhite,
            fontSize: 20,
            fontWeight: '500',
          }}>
          Button
        </Text>
      </TouchableOpacity>

      <View style={{marginTop: 20}}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text
          style={{color: THEME_TYPES.DARK === theme ? '#FFFFFF' : '#000000'}}>
          Go to Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
