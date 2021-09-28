import {create, destroy, findAll, findById, update, userFindAll,
} from '../../../api/fish.api';

import router from '../../../router/router';

export const actions = {
  findAll: async ({ commit }, id) => {
    commit('setLoadingStatus', true);
    await findAll(id)
      .then(({ fishes }) => {
        console.info('Action Success', fishes);
        commit('setLoadingStatus', false);
        commit('setFishes', fishes);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setFishes', []);
      });
  },

  userFindAll: async ({ commit }, id) => {
    commit('setLoadingStatus', true);
    await userFindAll(id)
      .then(({ fishes }) => {
        console.info('Action Success', fishes);
        commit('setLoadingStatus', false);
        commit('setFishes', fishes);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setFishes', []);
      });
  },

  create: async ({ commit }, fish) => {
    commit('setLoadingStatus', true);
    await create(fish.aquarium_param, fish)
      .then((response) => {
        console.info('Action Success', response);
        commit('setLoadingStatus', false);
        commit('setFishError', undefined);
        const aquariumId = response.fish.aquarium_param;
        router.push({ name: 'Aquariums', params: { aquariumId } });
        toastr.success('The fish was created successfully.', 'Fish');
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setFishError', error.response.data.error);
        toastr.error(error.response.data.message ?? 'Please complete the form to continue', 'Fish');
      });
  },

  findById: async ({ commit }, params) => {
    commit('setLoadingStatus', true);
    await findById(params.aquariumId, params.fishId)
      .then(({ fish }) => {
        console.info('Action Success', fish);
        commit('setLoadingStatus', false);
        commit('setFish', fish);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setFishError', error.response.data.error);
        commit('setFish', undefined);
      });
  },

  update: async ({ commit }, fish) => {
    commit('setLoadingStatus', true);
    await update(fish.aquariumId, fish.fishId, fish)
      .then((response) => {
        console.info('Action Success', response);
        commit('setFish', response.fish);
        commit('setLoadingStatus', false);
        commit('setFishError', undefined);
        const id = response.fish.aquarium_id;
        router.push({ name: 'ShowAquarium', params: { id } });
        toastr.success('The fish was updated successfully.', 'Fish');
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setFishError', error.response.data.error);
        toastr.error(error.response.data.message ?? 'Please complete the form to continue', 'Fish');
      });
  },

  destroy: async ({ commit }, params) => {
    commit('setLoadingStatus', true);
    await destroy(params.aquariumId, params.fishId)
      .then((response) => {
        console.info('Action Success', response);
        commit('setLoadingStatus', false);
        commit('setFishError', undefined);
        toastr.success('The aquarium was deleted successfully.', 'Aquarium');
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setFishError', error.response.data.error);
        toastr.error(error.response.data.message ?? 'We were not able to delete the aquarium', 'Aquarium');
      });
  },
};
