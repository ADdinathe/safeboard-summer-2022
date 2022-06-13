import styled, { css } from 'styled-components';
import defaultPattern from './img/pattern.png';

export const CardsWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(7, auto);
  gap: normal;
  justify-items: stretch;
  align-items: stretch;
`;

export const CardWrapper = styled.div<{ checked?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: 12rem;
  height: 14rem;
  position: relative;
  background: #e6e6e6;
  transition: transform 500ms;

  ${({ checked }) =>
    checked &&
    css`
      background: rgba(107, 248, 136, 0.7) !important;
    `}

  &:hover {
    transform: scale(1.2);
  }
`;

export const CardHeader = styled.h3`
  color: black;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  margin-top: 8px;
`;

export const CardGroup = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 12px;
`;

export const CardImage = styled.div`
  background: url(${defaultPattern}) no-repeat center / contain;
  width: 7rem;
  height: 7rem;
  margin-bottom: 12px;
`;

export const CardPhone = styled.div`
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
  name: 'checkbox',
})`
  position: absolute;
  top: 4px;
  left: 4px;
`;
