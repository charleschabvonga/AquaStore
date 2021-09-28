import {
  create, destroy, findAll, findById, update, userFindAll, userFindById,
} from '../../../api/aquarium.api';

import router from '../../../router/router';

export const actions = {
  findAll: async ({ commit }) => {
    commit('setLoadingStatus', true);
    await findAll()
      .then(({ aquariums }) => {
        console.info('Action Success', aquariums);
        commit('setLoadingStatus', false);
        commit('setAquariums', aquariums);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setAquariums', []);
      });
  },

  userFindAll: async ({ commit }) => {
    commit('setLoadingStatus', true);
    await userFindAll()
      .then(({ aquariums }) => {
        console.info('Action Success', aquariums);
        commit('setLoadingStatus', false);
        commit('setAquariums', aquariums);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setAquariums', []);
      });
  },

  create: async ({ commit }, aquarium) => {
    commit('setLoadingStatus', true);
    await create(aquarium)
      .then((response) => {
        console.info('Action Success', response);
        commit('setLoadingStatus', false);
        commit('setAquariumError', undefined);
        router.push({ name: 'Aquariums' });
        toastr.success('The aquarium was created successfully.', 'Aquarium');
      }, (error) => {
        console.error(`Action Error: ${error.message}`);
        commit('setLoadingStatus', false);
        commit('setAquariumError', error.response.data.error);
        toastr.error(error.response.data.message ?? 'Please complete the form to continue', 'Aquarium');
      });
  },

  findById: async ({ commit }, id) => {
    commit('setLoadingStatus', true);
    await findById(id)
      .then(({ aquarium }) => {
        console.info('Action Success', aquarium);
        commit('setLoadingStatus', false);
        commit('setAquarium', aquarium);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setAquariumError', error.response.data.error);
        commit('setAquarium', undefined);
      });
  },

  userFindById: async ({ commit }, id) => {
    commit('setLoadingStatus', true);
    await userFindById(id)
      .then(({ aquarium }) => {
        console.info('Action Success', aquarium);
        commit('setLoadingStatus', false);
        commit('setAquarium', aquarium);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setAquariumError', error.response.data.error);
        commit('setAquarium', undefined);
      });
  },

  update: async ({ commit }, aquarium) => {
    commit('setLoadingStatus', true);
    await update(aquarium.id, aquarium)
      .then((response) => {
        console.info('Action Success', response);
        commit('setAquarium', response.aquarium);
        commit('setLoadingStatus', false);
        commit('setAquariumError', undefined);
        router.push({ name: 'Aquariums' });
        toastr.success('The aquarium was updated successfully.', 'Aquarium');
      }, (error) => {
        console.error(`Action Error: ${error.message}`);
        commit('setLoadingStatus', false);
        commit('setAquariumError', error.response.data.error);
        toastr.error(error.response.data.message ?? 'Please complete the form to continue', 'Aquarium');
      });
  },

  destroy: async ({ commit }, id) => {
    commit('setLoadingStatus', true);
    await destroy(id)
      .then((response) => {
        console.info('Action Success', response);
        commit('setLoadingStatus', false);
        commit('setAquariumError', undefined);
        toastr.success('The aquarium was deleted successfully.', 'Aquarium');
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setAquariumError', error.response.data.error);
        toastr.error(error.response.data.message ?? 'We were not able to delete the aquarium', 'Aquarium');
      });
  },
};
