import axios from 'axios';

const api = {
  getListings() {
    return axios.get('http://localhost:8000/api/listings');
  },
  // Sends an HTTP request; Response is going to determine whether
  // we need to update the state to authenticated, therefore rendering
  // the main listing, or to keep the user on the Splash if not.
  getLoginStatus() {
    return axios.get('http://localhost:8000/checklogin');
  },
};

export default api;
