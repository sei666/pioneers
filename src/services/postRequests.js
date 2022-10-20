import API from "./api";
import { BASE_POST_URL } from "./urlConstants";

export async function postCreate(title, text, tags) {
    return await API.post( BASE_POST_URL + '/post', { title: title, text: text, tags:tags });
}

export async function getPost(postId) {
    return await API.get( BASE_POST_URL + '/post/' + postId );
}

export async function getPosts() {
    return await API.get( BASE_POST_URL + '/posts' );
}
