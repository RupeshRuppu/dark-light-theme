import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useContext, useReducer} from 'react';

/* theme types 

   1. default
   2. light
   3. dark

*/

export const THEME_TYPES = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
};

const initialState = {
  theme: THEME_TYPES.LIGHT,
};

function reducer(state = initialState, action) {
  console.log({action});
  if (action.type === THEME_TYPES.DARK) return {theme: THEME_TYPES.DARK};
  if (action.type === THEME_TYPES.LIGHT) return {theme: THEME_TYPES.LIGHT};
  return state;
}

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {theme: state.theme, dispatch};

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
