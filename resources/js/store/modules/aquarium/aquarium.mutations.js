import Vue from 'vue';

// used for emitting events for the publish/subscribe model
export const aquariumEventBus = new Vue();

export const mutations = {
  setAquariums: (state, value) => {
    state.aquariums = value;
  },
  setAquarium: (state, value) => {
    state.aquarium = value;
    aquariumEventBus.$emit('aquarium-set', value);
  },
  setAquariumError: (state, value) => {
    state.aquariumError = value;
  },
  setLoadingStatus: (state, value) => {
    state.loadingStatus = value;
  },
};
