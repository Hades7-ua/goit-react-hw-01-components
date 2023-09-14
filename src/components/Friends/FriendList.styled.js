import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 36px 0;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;

  width: 360px;
  padding: 10px 20px;
  background-color: #4dcb55f0;

  & > span {
    width: 18px;
    height: 18px;
    margin-left: 10px;

    border-radius: 100%;
    background-color: ${props => (props.isOnline ? 'red' : 'green')};
  }

  & > img {
    width: 36px;
    margin-right: 16px;
  }

  & > p {
    font-size: 20px;
    font-weight: 480;
  }
`;
