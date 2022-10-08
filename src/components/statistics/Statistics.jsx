import React from 'react';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/utils/getRandomHexColor';

import {
  StatisticsSection,
  Title,
  StatisticsList,
  StatisticItem,
  StatisticLabel,
  StatisticPercentage,
} from './Statistics.styled';

const Statistics = ({ title = '', stats }) => (
  <StatisticsSection>
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
  </StatisticsSection>
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
