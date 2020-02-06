import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: 'https://intl-school-social-worker.herokuapp.com/api',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};
