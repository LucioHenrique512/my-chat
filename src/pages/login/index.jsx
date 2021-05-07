import { Button } from "@material-ui/core";
import {
  Container,
  CardContainer,
  Title,
  Subtitle,
  ButtonsContainer,
} from "./styles";
import { FaGoogle } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";
import { useDispatch } from "react-redux";
import {
  sessionLogoutUser,
  sessionLoginUser,
} from "../../redux/session/actions";

export const LoginPage = () => {
  const { addToast } = useToasts();

  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    //TO DO implementar login pelo google firebase.
  };

  return (
    <Container>
      <CardContainer>
        <Title>MyChat</Title>
        <Subtitle>Realize o login a baixo, para começar.</Subtitle>
        <p>Entrar com:</p>
        <ButtonsContainer>
          <Button
            color="primary"
            variant="contained"
            startIcon={<FaGoogle />}
            style={{ marginRight: 15 }}
            onClick={handleGoogleLogin}
          >
            Google
          </Button>
          {/* <Button
            color="primary"
            variant="contained"
            startIcon={<FaFacebookF />}
            onClick={handleFacebookLogin}
          >
            Facebook
          </Button> */}
        </ButtonsContainer>
      </CardContainer>
    </Container>
  );
};
