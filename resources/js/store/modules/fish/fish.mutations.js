import Vue from 'vue';

// used for emitting events for the publish/subscribe model
export const fishEventBus = new Vue();

export const mutations = {
  setFishes: (state, value) => {
    state.fishes = value;
  },
  setFish: (state, value) => {
    state.fish = value;
    fishEventBus.$emit('fish-set', value);
  },
  setFishError: (state, value) => {
    state.fishError = value;
  },
  setLoadingStatus: (state, value) => {
    state.loadingStatus = value;
  },
};
