import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 20px auto;
  table-layout: fixed;
  width: 700px;
  border-collapse: collapse;
  border: ${p => p.theme.border.normal} ${p => p.theme.color.colorText};
  font-size: ${p => p.theme.fontSize[0]}px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);

  thead th {
    width: 33.33%;
    background-color: ${p => p.theme.color.colorTableHeaderBg};
    color: ${p => p.theme.color.colorBodyBg};
    text-align: center;
  }
  th,
  td {
    padding-top: ${p => p.theme.space[0]}px;
    padding-bottom: ${p => p.theme.space[0]}px;
    border: ${p => p.theme.border.normal} ${p => p.theme.color.colorText};
    color: ${p => p.theme.color.colorTextBold};
  }
  td:nth-child(odd) {
    padding-left: calc((100% / 3 / 2) - 15px);
  }
  td:nth-child(even) {
    padding-left: calc((100% / 3 / 2) - 22px);
  }
  tbody tr:nth-of-type(odd) {
    background-color: ${p => p.theme.color.colorComponentBg};
  }
  tbody tr:nth-of-type(even) {
    background-color: ${p => p.theme.color.colorTableRowEvenBg};
  }
`;
