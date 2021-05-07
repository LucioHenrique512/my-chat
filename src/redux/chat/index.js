import { chatActionsTypes } from "./actions";

const INIT_STATE = {
  messages: null,
};

const chat = (previusState = INIT_STATE, action) => {
  //console.log(action);
  switch (action.type) {
    case chatActionsTypes.RECIVE_MESSAGES:
      return {
        ...previusState,
        messages: action.payload,
      };
    default:
      return previusState;
  }
};

export default chat;
