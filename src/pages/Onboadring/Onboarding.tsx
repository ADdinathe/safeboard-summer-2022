import React from 'react';
import { LinkButton, MainBlock, MainWrapper } from './Onboarding.styles';
import { useMainStore } from 'store/hooks';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const mainStore = useMainStore();

  const navigate = useNavigate();

  const handleClick = React.useCallback(async () => {
    await mainStore.getUsers();
    navigate('main');
  }, []);

  return (
    <MainWrapper>
      <MainBlock>
        <h1>Привет!</h1>
        Это приветственная страница, чтобы посмотреть дальнешую реалищацию
        приложения...
        <LinkButton onClick={handleClick}>Нажми на меня</LinkButton>
      </MainBlock>
    </MainWrapper>
  );
};

export default observer(Onboarding);
