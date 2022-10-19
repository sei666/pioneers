import API from "./api";
import { BASE_LIKE_URL, BASE_URL_API } from "./urlConstants";

export async function setLike(postId) {
    return await API.post( BASE_URL_API + BASE_LIKE_URL + '/like', { postId: postId});
}

export async function unsetLike(postId) {
    return await API.delete( BASE_URL_API + BASE_LIKE_URL + '/like/' + postId);
}