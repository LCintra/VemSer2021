import axios from "axios";

const axiosPath = axios.create({
  baseURL: 'https://api.github.com/users/'
})

export {axiosPath}