import {View, Text, TouchableOpacity} from 'react-native';
import {THEME_TYPES, useThemeContext} from '../contexts/ThemeContext';

const Profile = ({navigation}) => {
  const {theme} = useThemeContext();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme === THEME_TYPES.DARK ? '#121212' : '#FFFFFF',
      }}>
      <Text
        style={{
          fontSize: 30,
          color: theme === THEME_TYPES.DARK ? '#FFFFFF' : '#000000',
        }}>
        Profile
      </Text>

      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text
          style={{color: THEME_TYPES.DARK === theme ? '#FFFFFF' : '#000000'}}>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
