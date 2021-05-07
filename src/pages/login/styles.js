import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const CardContainer = styled.div`
  padding: 25px;
  border-radius: 8px;
  background: #ffffff;
  border: solid 1px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

export const Title = styled.h1`
  color: #3f51b5;
  font-size: 25px;
`;

export const Subtitle = styled.p`
  color: #6b6b6b;
  font-size: 16px;
  margin: 10px 0px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 5px;
`;
