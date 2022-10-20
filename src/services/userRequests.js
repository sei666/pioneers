import API from "./api";
import { BASE_AUTH_URL } from "./urlConstants";

export async function login(username, password) {
    return await API.post( BASE_AUTH_URL + '/login', { username: username, password: password });
}

export async function getUserByToken(){
    return await API.get( BASE_AUTH_URL + "/getUserByToken");
}








