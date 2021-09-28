import {
  loginUser,
  registerUser,
  resetPassword,
  sendResetEmail,
  verifyEmail,
} from '../../../api/auth.api';

import router from '../../../router/router';

export const actions = {
  registerUser: async ({ commit }, user) => {
    commit('setLoadingStatus', true);
    await registerUser(user)
      .then((response) => {
        console.info('Action Success', response);
        commit('setAuthError', undefined);
        router.push({ name: 'Login' });
        commit('setLoadingStatus', false);
        toastr.success('We have registered your account', 'Authentication');
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setAuthError', error.response.data.error);
        toastr.error(error.response.data.message ?? 'Please complete the form to continue', 'Authentication');
      });
  },

  loginUser: async ({ commit }, user) => {
    commit('setLoadingStatus', true);
    await loginUser(user)
      .then((response) => {
        console.info('Action Success', response);
        if (response.access_token) {
          localStorage.setItem('token', response.access_token);
          commit('setLoginError', undefined);
          if (response.token_scope === 'admin') {
            router.push({ name: 'Aquariums' });
          } else if (response.token_scope === 'user') {
            router.push({ name: 'UserAquariums' });
          }
        }
        commit('setLoadingStatus', false);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setLoginError', error.response.data.error);
        toastr.error(error.response.data.message ?? 'Please complete the form to continue', 'Authentication');
      });
  },
};
