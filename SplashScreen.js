import {Text, SafeAreaView} from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '500',
          color: '#DE5E69',
        }}>
        Splash Screen
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
