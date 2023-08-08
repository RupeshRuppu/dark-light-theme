import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

const App = () => {
  const parsedIcon = parseIconFromClassName('fab fa-apple');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FontAwesome style={styles.iconStyle} icon={SolidIcons.truck} />
        <Text style={styles.textStyle}>Solid Icon</Text>
        <FontAwesome style={styles.iconStyle} icon={RegularIcons.addressBook} />
        <Text style={styles.textStyle}>Regular Icon</Text>
        <FontAwesome style={styles.iconStyle} icon={BrandIcons.android} />
        <Text style={styles.textStyle}>Brand Icon</Text>
        <FontAwesome style={styles.iconStyle} icon={parsedIcon} />
        <Text style={styles.textStyle}>Parsed Icon from class name:</Text>
        <Text style={styles.textStyle}>'fab fa-apple'</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  iconStyle: {
    fontSize: 40,
    marginTop: 30,
    color: '#6d11ff',
  },
  textStyle: {
    marginTop: 5,
    color: 'black',
  },
});

/*

import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  PermissionsAndroid,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';

const _App = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    PermissionsAndroid.request('android.permission.READ_CONTACTS').then(res => {
      console.log(res);
      if (res === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('res', res);
      }
    });

    animationRef.current.play();
  }, []);

  const openAppSettings = useCallback(async () => {
    await Linking.openSettings();
  });

  return (
    <SafeAreaView>
      <View style={{flex: 1, paddingHorizontal: 10, paddingVertical: 10}}>
        <TouchableOpacity onPress={openAppSettings}>
          <Text>Open Settings</Text>
        </TouchableOpacity>
        <LottieView
          source={require('./animation1.json')}
          autoPlay
          loop
          ref={animationRef}
          style={{width: 200, height: 200}}
        />
      </View>
    </SafeAreaView>
  );
};

export default _App;

*/
