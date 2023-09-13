import {
  FriendListContainer,
  FriendListItem,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id}>
          <FriendAvatar src={avatar} alt={name} />
          <FriendName>{name}</FriendName>
          <FriendStatus isOnline={isOnline}>
            {isOnline ? 'Online' : 'Offline'}
          </FriendStatus>
        </FriendListItem>
      ))}
    </FriendListContainer>
  );
};
