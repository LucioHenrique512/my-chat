import { sessionActionsTypes } from "./actions";

const INIT_STATE = {
  session: null,
};

const session = (previusState = INIT_STATE, action) => {
  switch (action.type) {
    case sessionActionsTypes.SESSION_LOGIN:
      return {
        ...previusState,
        session: action.payload,
      };
    case sessionActionsTypes.SESSION_LOGOUT:
      return INIT_STATE;
    default:
      return previusState;
  }
};

export default session;
