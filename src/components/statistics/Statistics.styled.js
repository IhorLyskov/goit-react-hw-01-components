import styled from 'styled-components';

export const StatisticsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.color.colorComponentBg};
  min-width: 450px;
  width: fit-content;
  margin: ${p => p.theme.space[3]}px auto;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  color: rgba(0, 0, 0, 0.5);
  font-size: ${p => p.theme.fontSize[2]}px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${p => p.theme.space[2]}px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const StatisticLabel = styled.span`
  color: ${p => p.theme.color.colorComponentBg};
  font-size: ${p => p.theme.fontSize[1]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
`;

export const StatisticPercentage = styled.span`
  font-size: ${p => p.theme.fontSize[2]}px;
  color: ${p => p.theme.color.colorComponentBg};
`;
