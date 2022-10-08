import styled from 'styled-components';

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17em;
  margin: ${p => p.theme.space[1]}px auto;
  background-color: ${p => p.theme.color.colorComponentBg};
  border-radius: ${p => p.theme.radius.normal};
  border-style: solid;
  color: ${p => p.theme.color.colorText};
  font-weight: ${p => p.theme.fontWeight.medium};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
`;

export const DescriptionDiv = styled.div`
  display: flex;
  padding: 20px 0px;
  margin: 16px auto;
  text-align: center;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
`;

export const Avatar = styled.img`
  width: 7em;
  border-radius: ${p => p.theme.radius.round};
  background-color: ${p => p.theme.color.colorText};
  margin: 0 auto;
`;

export const NameDiv = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: ${p => p.theme.space[0]}px;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSize[3]}px;
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.color.colorTextBold};
`;

export const Contact = styled.p`
  font-size: ${p => p.theme.fontSize[2]}px;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  border-top: ${p => p.theme.border.normal};
  color: ${p => p.theme.color.colorText};
  & > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    height: 70px;
    background-color: ${p => p.theme.color.statBgColor};
    &:first-of-type {
      border-bottom-left-radius: ${p => p.theme.radius.normal};
    }
    &:last-child {
      border-bottom-right-radius: ${p => p.theme.radius.normal};
    }
    &:not(:last-child) {
      border-right: ${p => p.theme.border.normal};
    }
  }
`;

export const Label = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.color.colorTextBold};
`;
