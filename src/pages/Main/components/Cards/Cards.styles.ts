import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: normal;
  justify-items: stretch;
  align-items: stretch;
`;

export const CardItem = styled.tr`
  background-color: black;
  height: 250px;
  width: 100px;
`;

export const TableHeader = styled.th`
  border: 1px solid grey;
`;

export const TableItem = styled.td`
  border: 1px solid grey;
`;
