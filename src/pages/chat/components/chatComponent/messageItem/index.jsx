import { UserPicture } from "../../../../../components";
import {
  Container,
  UserContainer,
  ContentContainer,
  MensageContainer,
} from "./styles";

export const MessageItem = ({ message, isMine }) => {
  return (
    <Container isMine={isMine}>
      <MensageContainer>
        <UserContainer isMine={isMine}>
          <UserPicture picture_url={message?.userPhoto} />
          <h3>{message?.name}</h3>
        </UserContainer>
        <ContentContainer isMine={isMine}>
          <p>{message?.text}</p>
        </ContentContainer>
      </MensageContainer>
    </Container>
  );
};
