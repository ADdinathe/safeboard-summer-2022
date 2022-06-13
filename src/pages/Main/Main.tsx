import * as React from 'react';
import Table from './components/Table';

import { observer } from 'mobx-react';
import {
  ButtonBack,
  ButtonGroup,
  SearchInput,
  UpperWrqpper,
  VisionButton,
} from './Main.styles';
import icon1 from './img/menu1.png';
import icon2 from './img/menu2.png';
import icon3 from './img/menu3.png';
import { useMainStore } from 'store/hooks';
import Groups from './components/Groups';
import Cards from './components/Cards';

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
    mainStore.searchInUsersList(event.target.value.toLocaleLowerCase());
  };

  React.useEffect(() => {
    mainStore.getUsers();
  }, [mainStore]);

  return (
    <div>
      <h1>SafeBoard 2022</h1>
      <UpperWrqpper>
        <SearchInput
          placeholder="Поиск..."
          value={serchQuery}
          onChange={handleChange}
        />
        <ButtonGroup>
          <VisionButton onClick={() => handleClick(VisionEnum.table)}>
            <ButtonBack img={icon2} />
          </VisionButton>
          <VisionButton onClick={() => handleClick(VisionEnum.cards)}>
            <ButtonBack img={icon1} />
          </VisionButton>
          <VisionButton onClick={() => handleClick(VisionEnum.groups)}>
            <ButtonBack img={icon3} />
          </VisionButton>
        </ButtonGroup>
      </UpperWrqpper>

      {visionOption === VisionEnum.table && <Table />}
      {visionOption === VisionEnum.cards && <Cards />}
      {visionOption === VisionEnum.groups && <Groups />}
    </div>
  );
};

export default observer(Main);
