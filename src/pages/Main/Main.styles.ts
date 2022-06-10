import styled, { css } from 'styled-components';

export const VisionButton = styled.button<{ img: string }>`
  background-color: #ffffff;
  padding: 20px;
  margin: 2px;

  ${({ img }) => css`
    background: url(${img}) center center / contain;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const SearchInput = styled.input``;
