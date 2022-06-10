import * as React from 'react';
import Table from './components/Table';

import { observer } from 'mobx-react';
import Cards from './components/Cards';
import { ButtonGroup, SearchInput, VisionButton } from './Main.styles';
import icon1 from './img/menu1.png';
import icon2 from './img/menu2.png';
import icon3 from './img/menu3.png';
import { useMainStore } from '../../store/hooks';

enum VisionEnum {
  table = 'table',
  cards = 'cards',
  groups = 'groups',
}

const Main: React.FC = () => {
  const [visionOption, setVisionOption] = React.useState<VisionEnum>(
    VisionEnum.table
  );

  const mainStore = useMainStore();

  const [serchQuery, setSearchQuery] = React.useState('');

  const handleClick = React.useCallback((type: VisionEnum) => {
    setVisionOption(type);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    mainStore.searchInUsersList(serchQuery.toLocaleLowerCase());
  };

  return (
    <div>
      <h1>Main</h1>
      <SearchInput
        placeholder="Поиск..."
        value={serchQuery}
        onChange={handleChange}
      />
      <ButtonGroup>
        <VisionButton
          onClick={() => handleClick(VisionEnum.table)}
          img={icon2}
        />
        <VisionButton
          onClick={() => handleClick(VisionEnum.cards)}
          img={icon1}
        />
        <VisionButton
          onClick={() => handleClick(VisionEnum.groups)}
          img={icon3}
        />
      </ButtonGroup>

      {visionOption === VisionEnum.table && <Table />}
      {visionOption === VisionEnum.cards && <Cards />}
      {visionOption === VisionEnum.groups && <Table />}
    </div>
  );
};

export default observer(Main);
