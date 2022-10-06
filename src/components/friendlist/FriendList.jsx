import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <section className="friends">
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  </section>
);

export default FriendList;
