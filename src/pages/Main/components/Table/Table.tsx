import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Checkbox,
  TableHeader,
  TableItem,
  TableString,
  TableWrapper,
} from './Table.styles';

import { useMainStore } from 'store/hooks';

const columns = [
  {
    label: '',
    accesor: 'checkbox',
  },
  {
    label: 'id',
    accesor: 'id',
  },
  {
    label: 'Полное имя',
    accesor: 'name',
  },
  {
    label: 'Электронная почта',
    accesor: 'email',
  },
  {
    label: 'Группа',
    accesor: 'group',
  },
  {
    label: 'Номер телефона',
    accesor: 'phone',
  },
];

const Table: React.FC = () => {
  const { usersListToShow, sortUsersList, checkUser, checkAllUsers } =
    useMainStore();

  const [sortField, setSortedField] = React.useState('id');

  const [sortOrder, setSortOrder] = React.useState('asc');

  const handleCheck = React.useCallback(
    (item: number) => {
      checkUser(item);
    },
    [checkUser]
  );

  const handleClick = React.useCallback(
    (accesor: string) => {
      if (accesor !== 'checkbox') {
        const sort =
          accesor === sortField && sortOrder === 'asc' ? 'desc' : 'asc';

        setSortedField(accesor);
        setSortOrder(sort);

        sortUsersList(accesor, sort);
      }
    },
    [sortField, sortOrder, sortUsersList]
  );

  return (
    <TableWrapper>
      <thead>
        <TableString>
          {columns.map((item) => (
            <TableHeader
              key={item.accesor}
              onClick={() => handleClick(item.accesor)}
              sortOrder={sortField === item.accesor ? sortOrder : undefined}
            >
              {item.accesor === 'checkbox' ? (
                <Checkbox onClick={checkAllUsers} />
              ) : (
                item.label
              )}
            </TableHeader>
          ))}
        </TableString>
      </thead>
      <tbody>
        {usersListToShow.map((item, index) => (
          <TableString key={index} checked={item.checked}>
            <TableItem>
              <Checkbox
                checked={item.checked}
                onClick={() => handleCheck(item.id)}
              />
            </TableItem>
            <TableItem>{item.id}</TableItem>
            <TableItem>{item.name}</TableItem>
            <TableItem>{item.email}</TableItem>
            <TableItem>{item.group ? item.group : '--'}</TableItem>
            <TableItem>{item.phone}</TableItem>
          </TableString>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default observer(Table);
