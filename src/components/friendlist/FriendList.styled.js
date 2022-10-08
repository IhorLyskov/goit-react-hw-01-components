import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
`;
