import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://homenest-lac.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
