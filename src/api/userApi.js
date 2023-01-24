import axiosClient from './axiosClient';

const userApi = {
  getUser: (id) => {
    const url = `/user/${id}`;
    return axiosClient.get(url);
  },
};

export default userApi;
