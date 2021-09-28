import { mutations } from './auth.mutations';
import { actions } from './auth.actions';

export const authModule = {
  namespaced: true,
  state: () => ({
    authError: undefined,
    loginError: undefined,
    logoutError: undefined,
    forgotPasswordError: undefined,
    resetPasswordError: undefined,
    loadingStatus: false,
  }),
  mutations,
  actions,
};
