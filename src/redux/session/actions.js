export const sessionActionsTypes = {
  SESSION_LOGIN: "SESSION_LOGIN",
  SESSION_LOGOUT: "SESSION_LOGOUT",
};

export const sessionLoginUser = (payload) => ({
  type: sessionActionsTypes.SESSION_LOGIN,
  payload,
});

export const sessionLofoutUser = () => ({
  type: sessionActionsTypes.SESSION_LOGOUT,
});
