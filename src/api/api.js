import axios from "axios";

// https://secure-shelf-66601.herokuapp.com
// http://[::1]:3000

export default axios.create({
  baseURL: "https://secure-shelf-66601.herokuapp.com"
});