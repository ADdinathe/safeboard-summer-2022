import * as React from 'react';
import { observer } from 'mobx-react';
import {
  CardsWrapper,
  CardGroup,
  CardHeader,
  CardPhone,
  CardWrapper,
  Checkbox,
  CardImage,
} from './Cards.styles';
import { useMainStore } from 'store/hooks';

const Cards: React.FC = () => {
  const mainStore = useMainStore();

  const handleCheck = React.useCallback(
    (item: number) => {
      mainStore.checkUser(item);
    },
    [mainStore]
  );

  return (
    <CardsWrapper>
      {mainStore.usersListToShow.map((item, index) => (
        <CardWrapper key={index} checked={item.checked}>
          <Checkbox
            onClick={() => handleCheck(item.id)}
            checked={item.checked}
          />
          <CardHeader>{item.name}</CardHeader>
          <CardImage />
          <CardGroup>{item.group}</CardGroup>
          <CardPhone>{item.phone}</CardPhone>
        </CardWrapper>
      ))}
    </CardsWrapper>
  );
};

export default observer(Cards);
