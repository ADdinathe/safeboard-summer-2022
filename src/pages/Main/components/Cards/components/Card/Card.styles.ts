import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #a9a9a9;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 5px;
  width: 8rem;
  height: 10rem;
`;

export const CardHeader = styled.h3`
  color: black;
  font-size: 22px;
  font-weight: 600;
`;

export const CardIcon = styled.div<{ icon?: string }>`
  ${({ icon }) =>
    icon &&
    css`
      background: url(${icon}) center center / contain;
    `}
`;

export const CardGroup = styled.div`
  border: 1px solid grey;
`;

export const CardPhone = styled.div`
  border: 1px solid grey;
`;
