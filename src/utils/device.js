import * as Application from 'expo-application';
import { Platform } from 'expo-modules-core';
import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const getDeviceId = async () => {
  if (Platform.OS === 'android') {
    return Application.androidId;
  } else {
    let deviceId = await SecureStore.getItemAsync('deviceId');

    if (!deviceId) {
      deviceId = uuidv4();
      await SecureStore.setItemAsync('deviceId', deviceId);
    }

    return deviceId;
  }
};
