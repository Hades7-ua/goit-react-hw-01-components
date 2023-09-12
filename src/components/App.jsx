import { ProfileCard } from './Profile/ProfileCard.jsx';
import user from 'data/user.json';

export const App = () => {
  return (
    <ProfileCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      // followers={user.stats.followers}
      // views={user.stats.views}
      // likes={user.stats.likes}
    />
  );
};
