import AsyncStorage from '@react-native-async-storage/async-storage';

const saveKeyInStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (_) {
    return false;
  }
};

const saveMultipleKeysInStorage = async keyValuePairObject => {
  const entries = Object.entries(keyValuePairObject);
  console.log(entries);

  try {
    await AsyncStorage.multiSet(entries);
    return true;
  } catch (_) {
    return false;
  }
};

const getItemStorage = async key => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item;
  } catch (_) {
    return false;
  }
};

export {getItemStorage, saveKeyInStorage, saveMultipleKeysInStorage};
