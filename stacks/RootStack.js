import {createContext, useContext, useRef, useState} from 'react';
import DrawerStackContainer from './DrawerStack';

const SwipeContext = createContext();
export const useSwipeContext = () => useContext(SwipeContext);

export default function RootStackNavigator() {
  const [enabled, setEnabled] = useState(true);
  const navigationRef = useRef(null);

  return (
    <SwipeContext.Provider value={{enabled, setEnabled, navigationRef}}>
      <DrawerStackContainer />
    </SwipeContext.Provider>
  );
}
