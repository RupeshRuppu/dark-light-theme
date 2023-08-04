import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import {THEME_TYPES, useThemeContext} from '../contexts/ThemeContext';

const ThirdTabScreen = () => {
  const {theme} = useThemeContext();
  return (
    <SafeAreaView
      style={{
        flex: 1,
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
        Third Tab Screen
      </Text>
    </SafeAreaView>
  );
};

export default ThirdTabScreen;
