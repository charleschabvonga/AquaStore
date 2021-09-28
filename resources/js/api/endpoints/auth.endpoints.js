import { API_PREFIX, getHttpPostData } from './index';

const getRegisterEndpoint = () => `${API_PREFIX}/auth/register`;
const getLoginEndpoint = () => `${API_PREFIX}/auth/login`;

export const getRegisterRequest = (user) => [
  getRegisterEndpoint(),
  getHttpPostData(user),
];

export const getLoginRequest = (user) => [
  getLoginEndpoint(),
  getHttpPostData(user),
];