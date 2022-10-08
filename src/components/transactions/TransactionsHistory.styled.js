import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 20px auto;
  table-layout: fixed;
  width: 700px;
  border-collapse: collapse;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.lightGreyFont};
  font-size: ${p => p.theme.fontSizes.xxs}px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);

  thead th {
    width: 33.33%;
    background-color: ${p => p.theme.colors.lightBlue};
    color: ${p => p.theme.colors.grey};
  }
  th,
  td {
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.lightGreyFont};
    color: ${p => p.theme.colors.darkGreyFont};
  }
  td {
    padding-left: calc((100% / 3 / 2) - 30px);
  }
  tbody tr:nth-of-type(odd) {
    background-color: ${p => p.theme.colors.white};
  }
  tbody tr:nth-of-type(even) {
    background-color: ${p => p.theme.colors.rowEvenColor};
  }
`;
