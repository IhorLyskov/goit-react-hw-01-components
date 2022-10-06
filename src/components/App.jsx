import React from 'react';
import Profile from './user/User.jsx';
import Statistics from './statistics/Statistics.jsx';
import FriendList from './friendlist/FriendList';
import TransactionsHistory from './transactions/TransactionsHistory';

import user from './user/user.json';
import data from './statistics/data.json';
import friends from './friendlist/friends.json';
import transactions from './transactions/transactions.json';

export const App = () => (
  <>
    <h1>1 - Профіль соціальної мережі</h1>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <h1>2 - Секція статистики</h1>
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />

    <h1>3 - Список друзів</h1>
    <FriendList friends={friends} />

    <h1>4 - Історія транзакцій</h1>
    <TransactionsHistory items={transactions} />
  </>
);
