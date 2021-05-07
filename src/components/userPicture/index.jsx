import { Container } from "./styles";

export const UserPicture = ({ picture_url }) => {
  return (
    <Container>
      <img src={picture_url} alt="user_picture" />
    </Container>
  );
};
