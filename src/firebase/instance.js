import axios from "axios";

export default axios.create({
  baseURL: "https://crud-with-firebase-b94cc-default-rtdb.firebaseio.com/"
})