import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  padding: ${p => p.theme.space[0]}px ${p => p.theme.space[1]}px;
  background-color: ${p => p.theme.color.colorComponentBg};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
`;

export const FriendStatus = styled.span(p => ({
  width: p.theme.space[2] + 'px',
  height: p.theme.space[2] + 'px',
  borderRadius: p.theme.radius.round,
  marginRight: p.theme.space[1] + 'px',
  backgroundColor: p.status ? 'green' : 'red',
}));

export const FriendAvatar = styled.img`
  border-radius: ${p => p.theme.radius.normal};
  margin-right: ${p => p.theme.space[0]}px;
  border: ${p => p.theme.border.normal};
`;

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeight.medium};
`;
