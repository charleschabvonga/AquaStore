export const mutations = {
  setAuthError: (state, value) => {
    state.authError = value;
  },
  setLoginError: (state, value) => {
    state.loginError = value;
  },
  setForgotPasswordError: (state, value) => {
    state.forgotPasswordError = value;
  },
  setResetPasswordError: (state, value) => {
    state.resetPasswordError = value;
  },
  setLoadingStatus: (state, value) => {
    state.loadingStatus = value;
  },
  setLogoutError: (state, value) => {
    state.logoutError = value;
  },
};
