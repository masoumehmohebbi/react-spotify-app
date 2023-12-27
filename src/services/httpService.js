import axios from "axios";

const BASE_URL = "https://spotify.apanel.top/api";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    console.log(err.config);
    const originalConfig = err.config;
    if (err.response.status === "401" && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const data = await axios.get(`${BASE_URL}/auth/token/refresh/`, {
          withCredentials: true,
        });

        console.log(data);
        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return err.Promise.reject(err);
  }
);
const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
