export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  group?: string;
  checked?: boolean;
};

export const UsersGroups: Record<string, string> = {
  management: 'Руководство',
  accounting: 'Бухгалтерия',
  hrDep: 'Отдел кадров',
  marketing: 'Маркетинг',
};

export const GROUPS = Object.keys(UsersGroups);

export type ApiResponse = {
  data: UserType[];
  status: number;
};
