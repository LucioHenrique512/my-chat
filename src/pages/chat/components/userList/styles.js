import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 250px;
  border-right: solid 1px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  padding: 20px;
  height: 160px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  h2 {
    color: #3f51b5;
  }
  p {
    color: #424242;
    margin-top: 10px;
  }
`;

export const UserList = styled.div`
  width: 100%;
  height: calc(100% - 160px);
  overflow-y: scroll;
`;

export const MainUser = styled.div`
  margin-top: 15px;
  h3 {
    font-size: 15px;
    margin-right: 10px;
    padding-bottom: 4px;
    color: #424242;
  }
  .info {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
`;

export const UserItem = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  cursor: pointer;
  h3 {
    font-size: 16px;
    margin-left: 20px;
    color: #424242;
  }

  :hover {
    background: rgba(0, 0, 0, 0.05);
    h3 {
      color: #3f51b5;
    }
  }
`;

export const NoUsers = styled.div`
  padding: 15px 0px;
  h3 {
    text-align: center;
    font-size: 15px;
    color: #424242;
  }
`;
