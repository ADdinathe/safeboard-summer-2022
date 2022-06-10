export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  group: string;
};

export type ApiResponse = {
  data: UserType[];
  status: number;
};
