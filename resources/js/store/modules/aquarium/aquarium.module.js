import { mutations } from './aquarium.mutations';
import { actions } from './aquarium.actions';

export const aquariumModule = {
  namespaced: true,
  state: () => ({
    aquariums: [],
    aquarium: undefined,
    aquariumError: undefined,
    loadingStatus: false,
  }),
  mutations,
  actions,
};
