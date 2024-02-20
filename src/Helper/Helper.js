import axios from "axios";
export const baseURL = "https://restapinodejs.onrender.com/api/";

export let axiosInstance = axios.create({
  baseURL,
});

// export const image = (media) => {
//   return `https://wtsacademy.dedicateddevelopers.us/uploads/product/${media}`;
// };

// export const profile_pic = (media) => {
//   return `https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${media}`;
// };

axiosInstance.interceptors.request.use(
  async function (config) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token !== null || token !== undefined) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosInstance;
