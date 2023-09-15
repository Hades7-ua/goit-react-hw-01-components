import {
  ProfileContainer,
  Avatar,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  StatItem,
  Label,
  Quantity,
} from './profile.styled';

export const ProfileCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Avatar src={avatar} alt={username} />
      <Description>
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </Stats>
    </ProfileContainer>
  );
};
