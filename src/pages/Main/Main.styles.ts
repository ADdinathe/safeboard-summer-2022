import styled, { css } from 'styled-components';

export const VisionButton = styled.button`
  background-color: #ffffff;
  padding: 4px;
  margin: 2px;
`;

export const ButtonBack = styled.div<{ img: string }>`
  width: 32px;
  height: 32px;
  ${({ img }) => css`
    background: url(${img}) center center / contain;
  `}
`;

export const UpperWrqpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;

  &:focus {
    outline: none;
  }
`;
