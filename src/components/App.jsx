import { ProfileCard } from './Profile/ProfileCard';
import user from 'data/user.json';
import { Container } from './App.styled';
import data from 'data/data.json';
import { StatisticsList } from './Statistics/StatisticsList';
export const App = () => {
  return (
    <Container>
      {' '}
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList stats={data} />
    </Container>
  );
};
