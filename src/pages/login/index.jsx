import { Button } from "@material-ui/core";
import {
  Container,
  CardContainer,
  Title,
  Subtitle,
  ButtonsContainer,
} from "./styles";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";

export const LoginPage = () => {
  const { addToast } = useToasts();

  const handleGoogleLogin = () => {
    // todo implementar login com google pelo firebase
    addToast("Saved Successfully", { appearance: "success" });
  };

  const handleFacebookLogin = () => {
    // todo implementar login com facebook pelo firebase
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
          <Button
            color="primary"
            variant="contained"
            startIcon={<FaFacebookF />}
            onClick={handleFacebookLogin}
          >
            Facebook
          </Button>
        </ButtonsContainer>
      </CardContainer>
    </Container>
  );
};
