import { TextField, Button } from "@material-ui/core";
import { Container, FormContainer, MessagesContainer } from "./styles";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { MessageItem } from "./messageItem";

export const ChatComponent = ({ handleSendMessage }) => {
  const [messageText, setMessageText] = useState("");
  const [error, setError] = useState(false);

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
      <MessagesContainer>
        <MessageItem />
        <MessageItem isMine />
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
