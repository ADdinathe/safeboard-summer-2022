import * as React from 'react';
import { observer } from 'mobx-react';
import {
  CardGroup,
  CardHeader,
  CardIcon,
  CardPhone,
  CardWrapper,
} from './Card.styles';

type CardProps = {
  name: string;
  group: string;
  phone: string;
  icon?: string;
};

const Card: React.FC<CardProps> = ({ name, group, phone, icon }: CardProps) => {
  return (
    <CardWrapper>
      <CardHeader>{name}</CardHeader>
      <CardIcon icon={icon} />
      <CardGroup>{group}</CardGroup>
      <CardPhone>{phone}</CardPhone>
    </CardWrapper>
  );
};

export default observer(Card);
