import {
  API_PREFIX,
  getAuthHeaders,
  getHttpDeleteData,
  getHttpGetData,
  getHttpPostData,
  getHttpPutData,
} from './index';

const getFishesEndpoint = (id) => `${API_PREFIX}/aquariums/${id}/fishes`;
const getUserFishesEndpoint = (id) => `${API_PREFIX}/aquariums/user/${id}/fishes`;
const getFishEndpoint = (aquariumId, fishId) => `${API_PREFIX}/aquariums/${aquariumId}/fishes/${fishId}`;

export const getFishesRequest = (id) => [
  getFishesEndpoint(id),
  getHttpGetData(getAuthHeaders()),
];

export const getUserFishesRequest = (id) => [
  getUserFishesEndpoint(id),
  getHttpGetData(getAuthHeaders()),
];

export const getCreateFishRequest = (id, fish) => [
  getFishesEndpoint(id),
  getHttpPostData(fish, getAuthHeaders()),
];

export const getFishRequest = (aquariumId, fishId) => [
  getFishEndpoint(aquariumId, fishId),
  getHttpGetData(getAuthHeaders()),
];

export const getEditFishRequest = (aquariumId, fishId, fish) => [
  getFishEndpoint(aquariumId, fishId),
  getHttpPutData(fish, getAuthHeaders()),
];

export const getDestroyFishRequest = (aquariumId, fishId) => [
  getFishEndpoint(aquariumId, fishId),
  getHttpDeleteData(getAuthHeaders()),
];