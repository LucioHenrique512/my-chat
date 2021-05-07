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
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { sessionLoginUser } from "../../redux/session/actions";

export const LoginPage = () => {
  const { addToast } = useToasts();

  const dispatch = useDispatch();

  // const setUserOnline = (user) => {
  //   const userListRef = firebase.database().ref("users");
  //   const
  // };

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope("profile");
    provider.addScope("email");

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;

        const sessionPayload = {
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          token,
        };

        //console.log(sessionPayload);

        addToast(`Seja bem vindo ${sessionPayload.name}`, {
          appearance: "success",
        });

        dispatch(sessionLoginUser(sessionPayload));
      });
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
