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
    const messagesRef = firebase.database().ref("messages");
    messagesRef.on("value", (data) => {
      dispatch(chatReciveMessages(data.val()));
    });
  }, []);

  const handleSendMenssage = (message) => {
    const messagesListRef = firebase.database().ref("messages");
    const newMessageRef = messagesListRef.push();
    const messagePayload = {
      name: user?.name,
      userPhoto: user?.photoUrl,
      email: user?.email,
      text: message,
    };

    newMessageRef.set(messagePayload);
    console.log(user);
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
