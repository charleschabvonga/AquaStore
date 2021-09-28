import axios from 'axios';

import {
  getCreateFishRequest,
  getDestroyFishRequest,
  getEditFishRequest,
  getFishRequest,
  getFishesRequest,
  getUserFishesRequest,
} from './endpoints/fish.endpoints';

export const findAll = async (id) => {
  try {
    const [endpoint, requestOptions] = getFishesRequest(id);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From fish/findAll: ${error.message}`);
    return Promise.reject(error);
  }
};

export const userFindAll = async (id) => {
  try {
    const [endpoint, requestOptions] = getUserFishesRequest(id);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From fish/userFindAll: ${error.message}`);
    return Promise.reject(error);
  }
};


export const create = async (id, fish) => {
  try {
    const [endpoint, requestOptions] = getCreateFishRequest(id, fish);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From fish/create: ${error.message}`);
    return Promise.reject(error);
  }
};

export const findById = async (aquariumId, fishId) => {
  try {
    const [endpoint, requestOptions] = getFishRequest(aquariumId, fishId);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From fish/findById: ${error.message}`);
    return Promise.reject(error);
  }
};

export const update = async (aquariumId, fishId, fish) => {
  try {
    const [endpoint, requestOptions] = getEditFishRequest(aquariumId, fishId, fish);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From fish/update: ${error.message}`);
    return Promise.reject(error);
  }
};

export const destroy = async (aquariumId, fishId) => {
  try {
    const [endpoint, requestOptions] = getDestroyFishRequest(aquariumId, fishId);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From fish/destroy: ${error.message}`);
    return Promise.reject(error);
  }
};