import { Container } from "./styles";
import { ChatContainer } from "./styles";
import { ChatComponent, OnlineUsersList } from "./components";
import firebase from "firebase";
import { useToasts } from "react-toast-notifications";
import { sessionLogoutUser } from "../../redux/session/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { chatReciveMessages } from "../../redux/chat/actions";

export const ChatPage = () => {
  const { addToast } = useToasts();
  const { user } = useSelector((state) => state.session);
  const { messages } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    //TO DO Implementar leitura de mensagens em tempo real do firebase.
  }, [dispatch]);

  const handleSendMenssage = (message) => {
    //TO DO Implementar envio de mensagem para o realtime database do firebase.
  };

  const handleClickLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        addToast("Volte sempre!", { appearance: "info" });
        dispatch(sessionLogoutUser());
      });
  };

  return (
    <Container>
      <ChatContainer>
        <OnlineUsersList handleClickLogout={handleClickLogout} user={user} />
        <ChatComponent
          handleSendMessage={handleSendMenssage}
          messages={messages}
          ownUser={user}
        />
      </ChatContainer>
    </Container>
  );
};
