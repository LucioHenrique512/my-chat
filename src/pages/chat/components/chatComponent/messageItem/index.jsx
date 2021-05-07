import { UserPicture } from "../../../../../components";
import {
  Container,
  UserContainer,
  ContentContainer,
  MensageContainer,
} from "./styles";

export const MessageItem = ({ isMine }) => {
  return (
    <Container isMine={isMine}>
      <MensageContainer>
        <UserContainer isMine={isMine}>
          <UserPicture picture_url="https://i.pravatar.cc/300" />
          <h3>User</h3>
        </UserContainer>
        <ContentContainer isMine={isMine}>
          <p>
            Deslegitimou a relativação da luta anti-colonialista perpetuando o
            fascismo, tirou o contexto da comunidade LGBTQIA+ no contexto
            civilizacional contemporâneo dos gays e não-binários, desestabilizou
            as oportunidades da reparação histórica há tanto tempo necessária
            dos gays e não-binários. Corrompeu as descontruções dos pretos,
            pardos, miscigenados, indígenas e autoproclamados com o intuito
            egoístico que transcendem a normalidade dos fatos.
          </p>
        </ContentContainer>
      </MensageContainer>
    </Container>
  );
};
