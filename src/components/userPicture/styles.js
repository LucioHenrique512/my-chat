import styled from "styled-components";

const USER_PIC_SIZE = 45;

export const Container = styled.div`
  width: ${USER_PIC_SIZE}px;
  height: ${USER_PIC_SIZE}px;
  border-radius: ${USER_PIC_SIZE / 2}px;
  border: solid 2px #3f51b5;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
