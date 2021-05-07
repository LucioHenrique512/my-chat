import { Button } from "@material-ui/core";
import { UserPicture } from "../../../../components";
import {
  Container,
  Header,
  UserItem,
  UserList,
  MainUser,
  NoUsers,
} from "./styles";

export const OnlineUsersList = () => {
  const users = [
    { name: "Some user", avatar_url: "https://i.pravatar.cc/200" },
  ];
  return (
    <Container>
      <Header>
        <h2>MyChat</h2>
        <MainUser>
          <UserPicture picture_url="https://i.pravatar.cc/300" />
          <div className="info">
            <h3>Nome do usuário</h3>
            <Button size="small" color="primary">
              Sair
            </Button>
          </div>
        </MainUser>
      </Header>
      <UserList>
        {users.length !== 0 ? (
          users.map(({ name, avatar_url }, index) => (
            <UserItem key={index}>
              <UserPicture picture_url={avatar_url} />
              <div className="info">
                <h3>{name}</h3>
              </div>
            </UserItem>
          ))
        ) : (
          <NoUsers>
            <h3>Nehum usuário logado.</h3>
          </NoUsers>
        )}
      </UserList>
    </Container>
  );
};
