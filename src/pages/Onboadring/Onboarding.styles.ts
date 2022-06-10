import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainBlock = styled.div`
  width: 40%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border: 2px solid #a29f9f;
  border-radius: 22px;
`;

export const LinkButton = styled.button`
  text-decoration: none;
  color: white;
  background-color: #7d7dff;
  border-radius: 10px;
  padding: 10px;
`;
