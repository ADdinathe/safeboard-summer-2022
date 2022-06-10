import { action, makeObservable, observable } from 'mobx';
import axios from 'axios';
import { ApiResponse, UserType } from './types';

export class MainStore {
  usersList: UserType[] = [];
  usersListToShow: UserType[] = [];
  constructor() {
    makeObservable(this, {
      usersList: observable.ref,
      usersListToShow: observable.ref,
      setUsersList: action,
    });
  }

  setUsersList = (usersList: UserType[]) => {
    this.usersList = usersList;
  };

  setUsersListToShow = (usersList: UserType[]) => {
    this.usersListToShow = usersList;
  };

  getUsers = async () => {
    const response: ApiResponse = await axios.get(
      'http://localhost:3004/clients'
    );

    this.setUsersList(response.data);
  };

  sortUsersList = (sortField: string, sortOrder: string) => {
    if (sortField) {
      const sorted = [...this.usersList].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });

      this.setUsersList(sorted);
    }
  };

  searchInUsersList = (searchQuery: string) => {
    if (searchQuery) {
      const search = [...this.usersList].filter((item) => {
        return (
          item.id.toString().toLocaleLowerCase().includes(searchQuery) ||
          item.phone.toString().toLocaleLowerCase().includes(searchQuery) ||
          item.name.toLocaleLowerCase().includes(searchQuery) ||
          item.group.toLocaleLowerCase().includes(searchQuery)
        );
      });

      this.setUsersListToShow(search);
    }
  };
}
