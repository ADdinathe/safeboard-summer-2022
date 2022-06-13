import * as React from 'react';
import {
  LinkButton,
  MainBlock,
  MainTitle,
  MainWrapper,
} from './Onboarding.styles';

import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();

  const handleClick = React.useCallback(async () => {
    navigate('main');
  }, [navigate]);

  return (
    <MainWrapper>
      <MainBlock>
        <MainTitle>Привет!</MainTitle>
        Это приветственная страница, чтобы посмотреть дальнешую реализацию
        приложения перейдите на следующую страницу
        <LinkButton onClick={handleClick}>Продолжить</LinkButton>
      </MainBlock>
    </MainWrapper>
  );
};

export default observer(Onboarding);
