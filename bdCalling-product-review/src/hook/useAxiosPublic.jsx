import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bd-calling-task-sever.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
