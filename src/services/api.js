import axios from "axios";
import jwt_decode from "jwt-decode";
import { store } from "../store/store";
import { BASE_URL_API } from "./urlConstants";


// Default config options
const defaultOptions = {
  baseURL: BASE_URL_API,
  responseType: "json"
};

// Create instance
let API = axios.create(defaultOptions);

// Set the AUTH token for any request
API.interceptors.request.use(function (config) {
  // console.log('api _ start');
  var token = localStorage.getItem('token');
  // console.log(token);
  
  var isExpired = true;
  if (token){
    var decodedToken=jwt_decode(token, {complete: true});

    var dateNow = new Date();
    // console.log(decodedToken);
  
    if(decodedToken.exp < dateNow.getTime()/1000){
        // console.log("isExpired");
        // localStorage.clear()
        localStorage.setItem('token', "");
    }
    else{
        isExpired = false;
        // console.log("isNotExpired");
    }
  }

  config.headers.Authorization =  !isExpired ? `Bearer ${token}` : '';
  config.headers.Pragma = 'no-cache';
  return config;
});

const {dispatch} = store;

// Add a response interceptor
API.interceptors.response.use(function (response) {
  // console.log('api _ start');
  // Do something with response data
  // if (localStorage.getItem('token'))
  return response;
}, function (error) {
  if (error.response.data.token == "not valid" || error.response.status == 422){
    // console.log(error.response.data.token, "error.response.data.token");
    // localStorage.clear();
    localStorage.setItem('token', "");
    window.location.reload(false);
    
  }
  try {
    if (error.response.data.pass_user == false){

    }
  } catch (error) {
      console.log(error);  
  }
  return Promise.reject(error);
});

export default API;