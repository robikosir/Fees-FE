import axios from "axios";

let headers = {};
headers["Content-Type"] = "application/json";
headers["Accept"] = "application/json";

const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 60000,
  headers: headers,
});

export default client;
