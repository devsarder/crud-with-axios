import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});
api.interceptors.request.use(
  (config) => {
    // console.log(config);
    const authToken = "fkjdskfaioeflkjsf";
    config.headers["Authorization"] = `Bearer ${authToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    console.log(response);

    return response;
  },
  (error) => {
    if (error.response) {
      error.message = `Error from server: status: ${error.response.status} - message: ${error.response.statusText}`;
    }
    return Promise.reject(error);
  }
);
export default api;
