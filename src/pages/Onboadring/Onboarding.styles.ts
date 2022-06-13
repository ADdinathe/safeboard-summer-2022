import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    135deg,
    rgba(97, 96, 255, 1) 26%,
    rgba(136, 96, 255, 1) 80%
  );
`;

export const MainBlock = styled.div`
  width: 40%;
  height: 20rem;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  color: white;
  font-family: Arial, serif;
  font-weight: 600;
  text-align: left;
`;

export const MainTitle = styled.h1`
  color: white;
  font-family: Arial, serif;
  font-weight: 600;
`;

export const LinkButton = styled.button`
  text-decoration: none;
  padding: 10px 25px;
  color: black;
  background: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 68px 10px rgba(255, 255, 255, 0.2);
  }
`;
