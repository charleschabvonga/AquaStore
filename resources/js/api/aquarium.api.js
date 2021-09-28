import axios from 'axios';

import {
  getAquariumRequest,
  getAquariumsRequest,
  getCreateAquariumRequest,
  getDestroyAquariumRequest,
  getEditAquariumRequest,
  getUserAquariumsRequest,
  getUserAquariumRequest
} from './endpoints/aquarium.endpoints';

export const findAll = async () => {
  try {
    const [endpoint, requestOptions] = getAquariumsRequest();
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From aquarium/findAll: ${error.message}`);
    return Promise.reject(error);
  }
};

export const userFindAll = async () => {
  try {
    const [endpoint, requestOptions] = getUserAquariumsRequest();
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From aquarium/userFindAll: ${error.message}`);
    return Promise.reject(error);
  }
};

export const create = async (aquarium) => {
  try {
    const [endpoint, requestOptions] = getCreateAquariumRequest(aquarium);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From aquarium/create: ${error.message}`);
    return Promise.reject(error);
  }
};

export const findById = async (aquarium) => {
  try {
    const [endpoint, requestOptions] = getAquariumRequest(aquarium);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From aquarium/findById: ${error.message}`);
    return Promise.reject(error);
  }
};

export const userFindById = async (aquarium) => {
  try {
    const [endpoint, requestOptions] = getUserAquariumRequest(aquarium);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From aquarium/userFindById: ${error.message}`);
    return Promise.reject(error);
  }
};

export const update = async (id, aquarium) => {
  try {
    const [endpoint, requestOptions] = getEditAquariumRequest(id, aquarium);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From aquarium/update: ${error.message}`);
    return Promise.reject(error);
  }
};

export const destroy = async (id) => {
  try {
    const [endpoint, requestOptions] = getDestroyAquariumRequest(id);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From aquarium/remove: ${error.message}`);
    return Promise.reject(error);
  }
};