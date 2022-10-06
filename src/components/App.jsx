import React from 'react';
import user from './user/user.json';
import Profile from './user/User.jsx';
import data from './statistics/data.json';
import Statistics from './statistics/Statistics.jsx';

export const App = () => (
  <>
    <section>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </section>
    <section>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </section>
  </>
);
