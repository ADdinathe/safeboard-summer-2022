import styled from 'styled-components';

export const GroupsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  overflow: hidden;
`;

export const GroupsListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow-x: scroll;
  width: 100%;
  flex-grow: 1;
  margin-right: 32px;
`;

export const AddGroupButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  //width: 0%;
  flex-grow: 0;

  border: 1px solid rgba(140, 140, 140, 0.84);
  padding: 12px 16px;
`;

export const AddGroupButton = styled.button`
  color: #73b3e7;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  width: 100%;
  white-space: nowrap;

  background: none;
  border: none;
`;

export const GroupNameInput = styled.input`
  width: 100%;
  margin-bottom: 12px;
`;
