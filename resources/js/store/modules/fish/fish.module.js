import { mutations } from './fish.mutations';
import { actions } from './fish.actions';

export const fishModule = {
  namespaced: true,
  state: () => ({
    fishes: [],
    fish: undefined,
    fishError: undefined,
    loadingStatus: false,
  }),
  mutations,
  actions,
};
