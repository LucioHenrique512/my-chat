export const chatActionsTypes = {
  RECIVE_MESSAGES: "RECIVE_MESSAGES",
};

export const chatReciveMessages = (payload) => ({
  type: chatActionsTypes.RECIVE_MESSAGES,
  payload,
});
