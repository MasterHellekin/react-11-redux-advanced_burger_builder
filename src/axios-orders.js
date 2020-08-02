import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-03-burger-builder.firebaseio.com/",
});

export default instance;
