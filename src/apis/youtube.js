import axios from 'axios';

const KEY = "AIzaSyByolLSA69GkGgb8OBGXoHeHwyfa8bP5zg";
//capitalised for constant value for constant value 


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});