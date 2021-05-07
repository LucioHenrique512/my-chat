import { Container } from "./styles";
import { ChatContainer } from "./styles";
import { ChatComponent, OnlineUsersList } from "./components";
import firebase from "firebase";
import { useToasts } from "react-toast-notifications";
import { sessionLogoutUser } from "../../redux/session/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const ChatPage = () => {
  useEffect(() => {}, []);

  const { addToast } = useToasts();
  const { user } = useSelector((state) => state.session);
  const dispatch = useDispatch();

  const handleSendMenssage = (message) => {
    // todo enviar mensagem com o firebase realtime database
    console.log("Mensagem digitada ->", message);
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
        <ChatComponent handleSendMessage={handleSendMenssage} />
      </ChatContainer>
    </Container>
  );
};
