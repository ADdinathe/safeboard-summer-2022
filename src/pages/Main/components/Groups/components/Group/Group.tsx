import * as React from 'react';
import { observer } from 'mobx-react';
import { useMainStore } from 'store/hooks';
import {
  AddButton,
  GroupItem,
  GroupItemName,
  GroupItemPhone,
  GroupItemTextWrapper,
  GroupItemTitle,
  GroupItemWrapper,
} from './Group.styles';

type GroupProps = {
  groupName: string;
};

const Group: React.FC<GroupProps> = ({ groupName }: GroupProps) => {
  const mainStore = useMainStore();

  const handleAdd = React.useCallback(() => {
    mainStore.setUsersGroup(groupName);
  }, [groupName, mainStore]);

  return (
    <GroupItemWrapper key={groupName}>
      <GroupItemTitle>{groupName}</GroupItemTitle>
      {mainStore.usersListToShow.map((item, index) => {
        if (item.group === groupName) {
          return (
            <GroupItem key={index}>
              <GroupItemTextWrapper>
                <GroupItemName>{item.name}</GroupItemName>
                <GroupItemPhone>{item.phone}</GroupItemPhone>
              </GroupItemTextWrapper>
            </GroupItem>
          );
        }

        return null;
      })}
      <AddButton onClick={handleAdd}>Добавить пользователя...</AddButton>
    </GroupItemWrapper>
  );
};

export default observer(Group);
