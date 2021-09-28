import axios from 'axios';

import {
  getLoginRequest,
  getRegisterRequest,
} from './endpoints/auth.endpoints';

export const registerUser = async (user) => {
  try {
    const [endpoint, requestOptions] = getRegisterRequest(user);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From registerUser: ${error.message}`);
    return Promise.reject(error);
  }
};

export const loginUser = async (user) => {
  try {
    const [endpoint, requestOptions] = getLoginRequest(user);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From loginUser: ${error.message}`);
    return Promise.reject(error);
  }
};