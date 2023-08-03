import {Text, SafeAreaView} from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '500',
          color: 'orange',
        }}>
        Splash Screen
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
