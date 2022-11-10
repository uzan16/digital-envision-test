import { IMaster, IPet, IResponseError, IResponseLogin } from "../interface";
import http from "../utils/http";

const api = {
  login: (payload: {username: string; password: string}) => {
    return http.post<IResponseLogin | IResponseError>(
      '/auth/login',
      payload
    );
  },
  getMaster: () => {
    return http.get<IMaster[] | IResponseError>('master');
  },
  updateMaster: ({id, favorites}: IMaster) => {
    return http.patch<IMaster | IResponseError>(`master/${id}`, {favorites});
  },
  getPet: () => {
    return http.get<IPet[] | IResponseError>('pet');
  },
};

export default {api};
