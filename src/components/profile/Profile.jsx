import React from 'react';
import PropTypes from 'prop-types';

import {
  ProfileSection,
  DescriptionDiv,
  Avatar,
  NameDiv,
  Name,
  Contact,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <ProfileSection>
    <DescriptionDiv>
      <Avatar src={avatar} alt="User avatar" />
      <NameDiv>
        <Name>{username}</Name>
        <Contact>@{tag}</Contact>
        <Contact>{location}</Contact>
      </NameDiv>
    </DescriptionDiv>

    <Stats>
      <li>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </li>
      <li>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </li>
      <li>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </li>
    </Stats>
  </ProfileSection>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
