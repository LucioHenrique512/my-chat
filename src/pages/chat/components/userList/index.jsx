import { Button } from "@material-ui/core";
import { UserPicture } from "../../../../components";
import { Container, Header, UserList, MainUser } from "./styles";

export const OnlineUsersList = ({ handleClickLogout, user }) => {
  return (
    <Container>
      <Header>
        <h2>MyChat</h2>
        <MainUser>
          <UserPicture picture_url={user?.photoUrl} />
          <div className="info">
            <h3>{user?.name}</h3>
            <Button size="small" color="primary" onClick={handleClickLogout}>
              Sair
            </Button>
          </div>
        </MainUser>
      </Header>
      <UserList>
        {/* {users.length !== 0 ? (
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
        )} */}
      </UserList>
    </Container>
  );
};
