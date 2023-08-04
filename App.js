import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import ThemeContextProvider, {useThemeContext} from './contexts/ThemeContext';
import {getItemStorage, saveMultipleKeysInStorage} from './storage';
import {useEffect, useState} from 'react';
import SplashScreen from './SplashScreen';
import RootStackNavigator from './stacks/RootStack';

const App = () => {
  const {theme, dispatch} = useThemeContext();
  const appearance = useColorScheme();
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  console.log({appearance, theme});

  useEffect(() => {
    /* IIFE to get user's default theme settings. */
    (async () => {
      const initial = await getItemStorage('INITIAL');
      const themeStoredInStorage = await getItemStorage('THEME');
      console.log({initial, themeStoredInStorage});
      if (!initial) {
        await saveMultipleKeysInStorage({
          INITIAL: 'YES',
          THEME: appearance.toUpperCase(),
        });
        dispatch({type: appearance.toUpperCase()});
      } else {
        console.log('theme which is stored');
        dispatch({type: themeStoredInStorage});
      }
    })();

    /* SHOW app's SPLASH SCREEN for 'n' seconds */
    const timeOutId = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);

    return () => {
      console.log('cleared');
      clearInterval(timeOutId);
    };
  }, []);

  if (showSplashScreen) return <SplashScreen />;
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default function AppContainer() {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
}

/*

   'Using NavigationContainer' is easiest way to implement dark/light theme mode by changing SYSTEM THEME through settings.   
   But it won't works if we have TOGGLE feature in APP.'



  const App = () => {
  const appearance = useColorScheme();
  return (
    <>
      <NavigationContainer
        theme={appearance === 'dark' ? Colors.dark : Colors.light}>
        <AppStack />
      </NavigationContainer>
    </>
  );
};


*/
