import {Text, SafeAreaView, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {THEME_TYPES, useThemeContext} from '../contexts/ThemeContext';

const {width, height} = Dimensions.get('screen');

const Contacts = ({navigation}) => {
  const {theme} = useThemeContext();

  /* Hiding bottom tabs in specific screen. */

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme === THEME_TYPES.DARK ? '#121212' : '#FFF',
      }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: '700',
          color: theme === THEME_TYPES.DARK ? '#FFF' : '#121212',
        }}>
        Contacts
      </Text>
    </SafeAreaView>
  );
};

export default Contacts;
