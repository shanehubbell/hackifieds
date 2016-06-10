import axios from 'axios';

const api = {
  getListings() {
    return axios.get('http://localhost:8000/api/listings');
  },
};

export default api;
