import { FriendsItem } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem isOnline={isOnline}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <span></span>
    </FriendsItem>
  );
};
