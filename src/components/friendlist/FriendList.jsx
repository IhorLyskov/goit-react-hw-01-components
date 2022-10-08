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

// import PropTypes from 'prop-types';
// import FriendListItem from './FriendListItem';
// import { Box } from '../Box';
// import { useTheme } from 'styled-components';

// function FriendList({ friends }) {
//   const theme = useTheme();
//   return (
//     <Box
//       flexDirection="column"
//       alignItems="center"
//       gridGap={theme.space[4]}
//       pt={theme.space[5]}
//       pb={theme.space[5]}
//     >
//       {friends.map(item => (
//         <FriendListItem key={item.id} item={item} />
//       ))}
//     </Box>
//   );
// }

// FriendList.protoTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// export default FriendList;
