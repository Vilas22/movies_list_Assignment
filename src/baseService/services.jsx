import axios from 'axios';

export const Post = (url, payload) => {
  try {
    return axios.post(url, payload);
  } catch (error) {
    console.log('Error------------>', error);
  }
};

export const Get = url => {
  try {
    return axios.get(url);
  } catch (error) {
    console.log('Error------------>', error);
  }
};
