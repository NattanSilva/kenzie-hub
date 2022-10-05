import axios from "axios";

export const token = localStorage.getItem("@userToken");
export const id = localStorage.getItem("@userId");

const Api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default Api;
