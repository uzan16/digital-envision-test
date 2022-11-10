import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootNavigationParamList = {
  Home: undefined;
  Detail: { owner: IMaster };
};

export type ScreenProps<RouteName extends keyof RootNavigationParamList> = NativeStackScreenProps<RootNavigationParamList, RouteName>;

export interface IMaster {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  favorites: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  petCount: number;
}

export interface ICategory {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface IPet {
  id: number;
  categoryId: number;
  masterId: number;
  name: string;
  dob: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  Category?: ICategory;
  Master: IMaster;
}

export interface IResponseError {
  status: string;
  message: string;
  errors: any;
}

export interface IResponseLogin {
  message: string;
  token: string;
}

export interface ISort {
  label: string;
  value: string;
}