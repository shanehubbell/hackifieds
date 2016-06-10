import axios from 'axios';

const api = {
  getListings() {
    return axios.get('http://localhost:8000/api/listings');
  },
  login() {
    return axios.get('http://localhost:8000/checklogin');
  },
};

export default api;
