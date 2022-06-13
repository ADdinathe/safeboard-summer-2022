import { action, makeObservable, observable } from 'mobx';
import axios from 'axios';
import { ApiResponse, UsersGroups, UserType } from './types';

export class MainStore {
  usersList: UserType[] = [];
  usersListToShow: UserType[] = [];
  groups = Object.values(UsersGroups);

  constructor() {
    makeObservable(this, {
      usersList: observable.ref,
      usersListToShow: observable.ref,
      setUsersList: action,
      checkUser: action,
      checkAllUsers: action,
      setUsersGroup: action,
      groups: observable.ref,
      setNewGroup: action,
    });
  }

  setUsersList = (usersList: UserType[]) => {
    this.usersList = usersList;
    this.usersListToShow = usersList;
  };

  checkAllUsers = () => {
    this.usersListToShow = this.usersListToShow.map((object) => {
      object.checked = !object.checked;

      return object;
    });
  };

  checkUser = (userID: number) => {
    this.usersListToShow = this.usersListToShow.map((object) => {
      if (object.id === userID) {
        object.checked = !object.checked;
      }

      return object;
    });
  };

  getUsers = async () => {
    const response: ApiResponse = await axios.get(
      'http://localhost:3004/clients'
    );

    if (response) {
      this.setUsersList(response.data);
    } else {
      console.log('error', response);
    }
  };

  setUsersGroup = async (groupName: string) => {
    this.usersListToShow = this.usersListToShow.map((object) => {
      if (object.checked === true) {
        object.group = groupName;
      }

      return object;
    });
  };

  setNewGroup = (groupName: string) => {
    this.groups = [...this.groups, groupName];
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
      this.usersListToShow = [...this.usersList].filter((item) => {
        return (
          item.id.toString().toLocaleLowerCase().includes(searchQuery) ||
          item.phone.toString().toLocaleLowerCase().includes(searchQuery) ||
          item.name.toLocaleLowerCase().includes(searchQuery) ||
          item.email.toLocaleLowerCase().includes(searchQuery) ||
          item.group?.toLocaleLowerCase().includes(searchQuery)
        );
      });
    } else {
      this.usersListToShow = this.usersList;
    }
  };
}
