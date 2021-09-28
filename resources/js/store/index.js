import Vue from 'vue';
import Vuex from 'vuex';

import { authModule } from './modules/auth/auth.module';
import { aquariumModule } from './modules/aquarium/aquarium.module';
import { fishModule } from './modules/fish/fish.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    aquarium: aquariumModule,
    fish: fishModule,
  },
  strict: true, // prevents the store being modified outside of a mutation
});
