import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ isMine }) => (isMine ? "row-reverse" : "row")};
`;

export const MensageContainer = styled.div`
  background: #ffffff;
  padding: 15px;
  margin-top: 25px;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.05);
  max-width: 70%;
  display: flex;
  flex-direction: column;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: ${({ isMine }) => (isMine ? "row-reverse" : "row")};
  align-items: center;
  h3 {
    font-size: 17px;
    margin: 0px 20px;
    color: ${({ isMine }) => (isMine ? "#3f51b5" : "#424242")};
  }
`;

export const ContentContainer = styled.div`
  margin-top: 15px;
  p {
    text-align: ${({ isMine }) => (isMine ? "right" : "left")};
  }
`;
