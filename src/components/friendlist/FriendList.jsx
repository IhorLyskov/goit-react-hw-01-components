import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

import { FriendList } from './FriendList.styled';

const Friends = ({ friends }) => (
  <FriendList>
    {friends.map(friend => {
      return <FriendListItem key={friend.id} friend={friend} />;
    })}
  </FriendList>
);

Friends.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Friends;
