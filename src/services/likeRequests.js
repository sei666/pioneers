import API from "./api";
import { BASE_LIKE_URL } from "./urlConstants";

export async function setLike(postId) {
    return await API.post( BASE_LIKE_URL + '/like', { postId: postId});
}

export async function unsetLike(postId) {
    return await API.delete( BASE_LIKE_URL + '/like/' + postId);
}