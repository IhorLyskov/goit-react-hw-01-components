import React from 'react';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/utils/getRandomHexColor';

import {
  StatisticsDiv,
  Title,
  StatisticsList,
  StatisticItem,
  StatisticLabel,
  StatisticPercentage,
} from './Statistics.styled';

const Statistics = ({ title = '', stats }) => (
  <StatisticsDiv>
    {title.length > 0 && <Title>{title.toUpperCase()}</Title>}
    <StatisticsList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem
          key={id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <StatisticLabel>{label}</StatisticLabel>
          <StatisticPercentage>{percentage}%</StatisticPercentage>
        </StatisticItem>
      ))}
    </StatisticsList>
  </StatisticsDiv>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
