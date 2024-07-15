import { API } from ".";

export const getAppVersion = async () => {
  const res = await API.get('/api/version');
};