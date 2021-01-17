import axios from 'axios';

const instance = axios.create({
  baseURL: "https://rude-sands.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export default instance;