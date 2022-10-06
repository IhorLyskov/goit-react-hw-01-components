import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <li className="item">
      <span className="status" data-status={isOnline}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
export default FriendListItem;
