import * as React from 'react';
import { observer } from 'mobx-react';
import { CardsWrapper } from './Cards.styles';
import Card from './components/Card';
import { useMainStore } from 'store/hooks';

const Cards: React.FC = () => {
  const mainStore = useMainStore();

  return (
    <CardsWrapper>
      {mainStore.usersList.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          group={item.group}
          phone={item.phone}
        />
      ))}
    </CardsWrapper>
  );
};

export default observer(Cards);
