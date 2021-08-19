import axios from "axios";

export default axios.create({
  baseURL: "https://react-crud-f72f0-default-rtdb.firebaseio.com/"
})