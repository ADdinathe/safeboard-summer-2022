import styled from 'styled-components';

export const GroupItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 24px;
  padding: 16px;
  border: 1px solid rgba(140, 140, 140, 0.84);
  width: 100%;
  min-width: ;
`;

export const GroupItemTitle = styled.div`
  font-weight: normal;
  font-size: 20px;
  text-align: left;
  width: 100%;
  margin-bottom: 12px;
`;

export const GroupItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  border: 1px solid rgba(140, 140, 140, 0.84);
  width: 100%;
  padding: 12px;
  text-align: left;
`;

export const GroupItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GroupItemName = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const GroupItemPhone = styled.div`
  color: #3939fc;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`;

export const AddButton = styled.button`
  margin-top: 12px;
  color: #73b3e7;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  width: 100%;
  white-space: nowrap;

  background: none;
  border: none;
`;
