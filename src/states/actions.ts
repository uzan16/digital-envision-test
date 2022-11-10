import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_MASTER_ID, KEY_TOKEN } from '../data/constant';
import { IMaster, IPet, IResponseError, IResponseLogin, ISort } from '../interface';
import {Context} from './index';

export const preProcessToken = async ({actions}: Context) => {
  try {
    await actions.loginAccount({
      username: 'yourname',
      password: 'yourpassword'
    })
  } catch (e) {
    return;
  }
};

export const loadAppData = async (context: Context): Promise<void> => {
  {
    try {
      // get pet
      const {data} = await context.effects.api.getPet();
      if ((<IResponseError>data).status === 'Error') {
        context.state.pets = [];
      }
      context.state.pets = <IPet[]>data;
    } catch {
      context.state.pets = [];
    }
  }
  {
    try {
      // get owner
      const {data} = await context.effects.api.getMaster();
      if ((<IResponseError>data).status === 'Error') {
        context.state.owners = [];
      }
      context.state.owners = <IMaster[]>data;

      // set master
      let masterID = await AsyncStorage.getItem(KEY_MASTER_ID);
      if (masterID) {
        const obj = context.state.owners.find(x => x.id === +(masterID || ''))
        if (obj) {
          context.state.selectedMaster = {...obj};
        }
      }
    } catch {
      context.state.owners = [];
    }
  }
};

export const loginAccount = async (
  context: Context,
  payload: {
    username: string;
    password: string;
  }
): Promise<IResponseLogin | IResponseError> => {
  const {data} = await context.effects.api.login(payload);
  if ((<IResponseLogin>data).message === 'Success') {
    const token = (<IResponseLogin>data).token;
    if (token) {
      await AsyncStorage.setItem(KEY_TOKEN, token);
    }
  }

  return data;
};

export const setSort = async (
  context: Context,
  payload: ISort
) => {
  context.state.sort = payload;
};

export const setFavorite = async (
  {effects, state}: Context,
  payload: IMaster
): Promise<IMaster | IResponseError> => {
  const {data} = await effects.api.updateMaster({...payload, favorites: !payload.favorites});
  if (!((<IResponseError>data).status === 'Error')) {
    const updatedMaster = <IMaster>data;
    const existingMaster = [...state.owners];
    const updatedIndex = existingMaster.findIndex(x => x.id === updatedMaster.id);
    existingMaster[updatedIndex].favorites = updatedMaster.favorites;
    state.owners = [...existingMaster];
  }

  return data;
};

export const setMaster = async (
  {state}: Context,
  payload: IMaster
) => { 
  const selectedMaster = state.owners.find(x => x.id === payload.id);
  if (selectedMaster) {
    await AsyncStorage.setItem(KEY_MASTER_ID, `${selectedMaster.id}`);
    state.selectedMaster = {...selectedMaster};
  } else
    state.selectedMaster = undefined;
};