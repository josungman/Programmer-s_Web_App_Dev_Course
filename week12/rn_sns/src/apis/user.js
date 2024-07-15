import { API } from ".";

export const getMyInfo = async () => {
  return res = await API.get('/api/info');
};