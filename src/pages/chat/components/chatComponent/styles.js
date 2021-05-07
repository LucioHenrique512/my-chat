import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(#3f51b510, #ffffff);
  width: calc(100% - 250px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MessagesContainer = styled.div`
  height: calc(100% - 100px);
  width: 100%;
  overflow-y: scroll;
  padding: 0px 50px;
`;

export const FormContainer = styled.form`
  height: 100px;
  width: 100%;
  background: #ffffff;
  border-top: solid 1px rgba(0, 0, 0, 0.2);
  padding: 0px 20px;
  display: flex;
  align-items: center;
`;
