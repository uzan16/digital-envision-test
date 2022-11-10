import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as RootNavigation from '@navigations/root-navigation';
import { KEY_TOKEN } from '../data/constant';

const http = axios.create({
  baseURL: 'http://137.184.38.68:3001'
});

http.interceptors.request.use(
  async (config: any) => {
    let token = await AsyncStorage.getItem(KEY_TOKEN);
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    throw error;
  }
);

export default http;
