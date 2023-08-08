import {Text, SafeAreaView, Dimensions} from 'react-native';
import {THEME_TYPES, useThemeContext} from '../contexts/ThemeContext';

const {width, height} = Dimensions.get('screen');

const Contacts = () => {
  const {theme} = useThemeContext();
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
