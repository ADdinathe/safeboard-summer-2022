import * as React from 'react';
import { observer } from 'mobx-react';
import {
  AddGroupButton,
  AddGroupButtonWrapper,
  GroupNameInput,
  GroupsListWrapper,
  GroupsWrapper,
} from './Groups.styles';
import Group from './components/Group';
import { useMainStore } from 'store/hooks';

const Groups: React.FC = () => {
  const [showInput, setShowInput] = React.useState(false);

  const { setNewGroup, groups } = useMainStore();

  const [newGroupName, setNewGroupName] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGroupName(event.target.value);
  };

  const handleClick = React.useCallback(() => {
    if (newGroupName) {
      setNewGroup(newGroupName);
      setShowInput(false);
      setNewGroupName('');
    } else {
      setShowInput(true);
    }
  }, [newGroupName, setNewGroup]);

  return (
    <GroupsWrapper>
      <GroupsListWrapper>
        {groups.map((groupName, index) => (
          <Group key={index} groupName={groupName} />
        ))}
      </GroupsListWrapper>

      <AddGroupButtonWrapper>
        {showInput && (
          <GroupNameInput
            placeholder="Название новой группы..."
            value={newGroupName}
            onChange={handleChange}
          />
        )}
        <AddGroupButton onClick={handleClick}>Добавить группу</AddGroupButton>
      </AddGroupButtonWrapper>
    </GroupsWrapper>
  );
};

export default observer(Groups);
