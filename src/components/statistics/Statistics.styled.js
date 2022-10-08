import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  min-width: 450px;
  width: fit-content;
  margin: ${p => p.theme.space[6]}px auto;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  color: rgba(0, 0, 0, 0.5);
  font-size: ${p => p.theme.fontSizes.m}px;
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
  padding: ${p => p.theme.space[5]}px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const StatisticLabel = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes[1]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const StatisticPercentage = styled.span`
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: ${p => p.theme.colors.white};
`;
