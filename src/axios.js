import axios from 'axios';

const instance = axios.create({
  baseURL: "https://77c90f029282.ngrok.io",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export default instance;