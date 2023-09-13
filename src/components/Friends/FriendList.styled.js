import styled from 'styled-components';

export const FriendListContainer = styled.div`
  width: 768px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
`;

export const FriendListItem = styled.li`
  display: flex;
  width: 300px;
  background-color: #70ace7;
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const FriendAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FriendName = styled.span`
  font-weight: bold;
`;

export const FriendStatus = styled.span`
  color: ${props => (props.isOnline ? 'green' : 'red')};
`;
