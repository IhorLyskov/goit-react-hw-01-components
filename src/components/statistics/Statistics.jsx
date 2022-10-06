import React from 'react';

const Statistics = ({ title, stats }) => (
  <section class="statistics">
    {title.length > 0 && <h2 class="title">{title.toUpperCase()}</h2>}

    <ul class="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li class="item" key={id}>
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
