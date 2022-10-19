import axios from "axios";
import jwt_decode from "jwt-decode";
import { store } from "../store/store";
import { BASE_URL_API } from "./urlConstants";


// Default config options
const defaultOptions = {
  baseURL: BASE_URL_API + ":5001",
  responseType: "json"
};

// Create instance
let API = axios.create(defaultOptions);

// Set the AUTH token for any request
API.interceptors.request.use(function (config) {
  // console.log('api _ start');
  var token = localStorage.getItem('token');
  // console.log(token);
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2NjE4ODY5NCwianRpIjoiNGNhNTNjYmEtYjczYS00NzhjLWFiMTktZGRhNmUzOGNlZmE3IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYzNGRiOWM5NGVhM2EyMmUwOTc5ODZhNyIsIm5iZiI6MTY2NjE4ODY5NCwiZXhwIjoxNjk3NzI0Njk0fQ.gTdQenjllilAOLAzikLNdS9Ds9NiQhAibhksry6uqtM"
  // token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ3Mzg2MDUsIm5iZiI6MTYwNDczODYwNSwianRpIjoiOWIzZjcxY2QtZjNmOS00NTk1LTgyOTUtZGFjOWI1ZGUwNzJjIiwiZXhwIjoxNjA1MzQzNDA1LCJpZGVudGl0eSI6IjVmYTQwNWU4NzQ1NmJjNjRlODQxNDY5NyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.LhP0nDS_Spwf1Wg7DgdeHV_AAtAa4MLNJ3uPLwcnLoc"
  // token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDA4NzA2NDcsIm5iZiI6MTYwMDg3MDY0NywianRpIjoiZTQ4OWRlZmYtODRhZS00NDZkLWJjNmItNzU0YzA4MmIwZjc5IiwiZXhwIjoxNjAxNDc1NDQ3LCJpZGVudGl0eSI6IjVmNmIzNDk0NDhjNjQyMGI1ZDQ4OTUzZiIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.4CKL5siLHKfsNE3Uc_cZiTEWYFuGGy9Z23n3iBZhjWA";
  // token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDE2NDQ0NDksIm5iZiI6MTYwMTY0NDQ0OSwianRpIjoiY2Y5NzJiZDYtYmFlZC00MWNlLWFiMTItZmRiYzEzMzRhYTEzIiwiZXhwIjoxNjAyMjQ5MjQ5LCJpZGVudGl0eSI6IjVmNzVkZWYxYjlmYTQ0Y2ExNjY1OTFiOSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.hTZERg0z0kx7-hCSlEkMNBBofiSW1bLD3qWnyc04EBB";
  // token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDMyMDU1NjUsIm5iZiI6MTYwMzIwNTU2NSwianRpIjoiYmM4NDFjY2ItNTUyOS00NWMzLWEzY2MtZDlmNGIyYzM4NTMwIiwiZXhwIjoxNjAzODEwMzY1LCJpZGVudGl0eSI6IjVmOGVhOGJhMDJiNzlmNzllNzJjNmM3YyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.2ywf0NayAjrZBv1Xy_XfsPwgohzrZ9BBqiw4CuyaTPg"
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