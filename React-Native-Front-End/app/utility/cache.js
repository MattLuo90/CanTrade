import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import logger from './logger';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now()
    }
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (e) {
    logger.log(e);
  }
}

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, 'minutes') > expiryInMinutes;
}

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return console.log('null');

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;

  } catch (e) {
    console.log(e);
  }
}

export default {
  store,
  get,
};