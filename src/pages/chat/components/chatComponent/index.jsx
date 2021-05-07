import { TextField, Button } from "@material-ui/core";
import { Container, FormContainer, MessagesContainer } from "./styles";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { MessageItem } from "./messageItem";
import { useEffect } from "react";
import { useRef } from "react";

export const ChatComponent = ({ handleSendMessage, messages, ownUser }) => {
  const [messageText, setMessageText] = useState("");
  const [error, setError] = useState(false);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    if (messageContainerRef) {
      messageContainerRef.current.addEventListener(
        "DOMNodeInserted",
        (event) => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: "smooth" });
        }
      );
    }
  });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (messageText !== "") {
      setError(false);
      handleSendMessage(messageText);
      setMessageText("");
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <MessagesContainer ref={messageContainerRef}>
        {!!messages
          ? Object.keys(messages).map((messageKey) => (
              <MessageItem
                key={messageKey}
                message={messages[messageKey]}
                isMine={ownUser?.email === messages[messageKey].email}
              />
            ))
          : "Sem mensagens!"}
      </MessagesContainer>

      <FormContainer onSubmit={handleSubmitForm}>
        <TextField
          fullWidth
          label="Digite sua mensagem"
          variant={"outlined"}
          value={messageText}
          onChange={(event) => setMessageText(event.target.value)}
          error={error}
        />
        <Button
          color={"primary"}
          endIcon={<FaPaperPlane />}
          style={{ marginLeft: 20 }}
          type="submit"
        >
          Enviar
        </Button>
      </FormContainer>
    </Container>
  );
};
