import {
  API_PREFIX,
  getAuthHeaders,
  getHttpDeleteData,
  getHttpGetData,
  getHttpPostData,
  getHttpPutData,
} from './index';

const getAquariumsEndpoint = () => `${API_PREFIX}/aquariums`;
const getUserAquariumsEndpoint = () => `${API_PREFIX}/aquariums/user`;
// const getUserAquariumEndpoint = () => `${API_PREFIX}/aquariums/user`;
const getAquariumEndpoint = (id) => `${API_PREFIX}/aquariums/${id}`;

export const getAquariumsRequest = () => [
  getAquariumsEndpoint(),
  getHttpGetData(getAuthHeaders()),
];

export const getUserAquariumsRequest = () => [
  getUserAquariumsEndpoint(),
  getHttpGetData(getAuthHeaders()),
];

export const getCreateAquariumRequest = (aquarium) => [
  getAquariumsEndpoint(),
  getHttpPostData(aquarium, getAuthHeaders()),
];

export const getAquariumRequest = (id) => [
  getAquariumEndpoint(id),
  getHttpGetData(getAuthHeaders()),
];

export const getUserAquariumRequest = (id) => [
  // getUserAquariumEndpoint(id),
  getUserAquariumsEndpoint(id),
  getHttpGetData(getAuthHeaders()),
];

export const getEditAquariumRequest = (id, aquarium) => [
  getAquariumEndpoint(id),
  getHttpPutData(aquarium, getAuthHeaders()),
];

export const getDestroyAquariumRequest = (id) => [
  getAquariumEndpoint(id),
  getHttpDeleteData(getAuthHeaders()),
];
