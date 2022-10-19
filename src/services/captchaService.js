import API from "./api";
import axios from "axios";
import { BASE_URL_API } from "./urlConstants";

var baseUrlCaptcha = BASE_URL_API + ":5005"
// export async function getNewCaptcha() {
//     return await API.get('/api/getNewCaptcha');
// }

// export async function tryingToSolve(nanoId, presumptiveAnswer) {
//     return await API.get('/api/tryingToSolve/' + nanoId + '/' + Math.round(presumptiveAnswer));
// }

export async function getNewCaptcha() {
    const url = baseUrlCaptcha + '/api/getNewCaptcha';
    return await API.get(url);
}

export async function tryingToSolve(nanoId, presumptiveAnswer) {
    const url =  baseUrlCaptcha + '/api/tryingToSolve/' + nanoId + '/' + Math.round(presumptiveAnswer);
    return await API.get(url);
}
