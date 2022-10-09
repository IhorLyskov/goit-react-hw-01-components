import React from 'react';
import Section from './section/Section.jsx';
import Profile from './profile/Profile.jsx';
import Statistics from './statistics/Statistics.jsx';
import Friends from './friendlist/FriendList';
import TransactionsHistory from './transactions/TransactionsHistory';

import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendlist/friends.json';
import transactions from './transactions/transactions.json';

import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';

const App = () => (
  <>
    <GlobalStyle />
    <Section title="1 - Профіль соціальної мережі">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Section>

    <Section title="2 - Секція статистики">
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </Section>

    <Section title="3 - Список друзів">
      <Friends friends={friends} />
    </Section>

    <Section title="4 - Історія транзакцій">
      <TransactionsHistory items={transactions} />
    </Section>
  </>
);

export default App;
