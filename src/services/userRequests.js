import API from "./api";
import { BASE_AUTH_URL, BASE_URL_API } from "./urlConstants";

export async function auth(username, password) {
    return await API.post( BASE_URL_API + BASE_AUTH_URL + '/login', { username: username, password: password });
}

export async function getUserByToken(){
    return await API.get( BASE_URL_API + BASE_AUTH_URL + "/getUserByToken");
}








