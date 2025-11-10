import axios from "axios";

const axiosInsatnce = axios.create({
  baseURL: "http://localhost:2000",
});

const useAxios = () => {
  return axiosInsatnce;
};

export default useAxios;
