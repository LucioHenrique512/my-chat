import { Container } from "./styles";
import { ChatContainer } from "./styles";
import { ChatComponent, OnlineUsersList } from "./components";

export const ChatPage = () => {
  const handleSendMenssage = (message) => {
    // todo enviar mensagem com o firebase realtime database
    console.log("Mensagem digitada ->", message);
  };

  return (
    <Container>
      <ChatContainer>
        <OnlineUsersList />
        <ChatComponent handleSendMessage={handleSendMenssage} />
      </ChatContainer>
    </Container>
  );
};
