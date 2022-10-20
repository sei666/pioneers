import API from "./api";
import { BASE_COMMENT_URL } from "./urlConstants";

export async function commentCreate(postId, text) {
    return await API.post( BASE_COMMENT_URL + '/comment', {postId: postId, text: text });
}

export async function getComments(postId) {
    return await API.get( BASE_COMMENT_URL + '/comments/' + postId);
}