import { Container } from './App.styled';

import { ProfileCard } from './Profile/ProfileCard';
import user from 'data/user.json';

import data from 'data/data.json';
import { StatisticsList } from './Statistics/StatisticsList';

import friends from 'data/friends.json';
import { FriendList } from './Friends/FriendList';

import transactions from 'data/transactions.json';
import { TransactionHistory } from './Transactions/TransactionsHistory';

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
      <StatisticsList title="Upload stats" stats={data} />
      <StatisticsList stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
