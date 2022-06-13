import styled, { css } from 'styled-components';

export const TableString = styled.tr<{ checked?: boolean }>`
  ${({ checked }) =>
    checked &&
    css`
      background: rgba(107, 248, 136, 0.7) !important;
    `}

  &:hover {
    background: rgba(0, 255, 255, 0.43) !important;
  }
`;

export const TableWrapper = styled.table`
  margin: 20px auto;
  width: 100%;

  ${TableString}:nth-child(even) {
    background: #f2f2f2;
  }

  border-spacing: 0 5px;
`;

export const TableHeader = styled.th<{ sortOrder?: string }>`
  background: #eaf1ef;
  color: #959897;
  font-weight: 400;
  &::after {
    ${({ sortOrder }) =>
      sortOrder === 'asc'
        ? css`
            content: ' ↓';
          `
        : sortOrder === 'desc'
        ? css`
            content: ' ↑';
          `
        : css``}
  }
`;

export const TableItem = styled.td``;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
  name: 'checkbox',
})``;
