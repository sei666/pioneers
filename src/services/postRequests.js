import API from "./api";
import { BASE_POST_URL, BASE_URL_API } from "./urlConstants";

export async function postCreate(title, text, tags) {
    return await API.post( BASE_URL_API + BASE_POST_URL + '/post', { title: title, text: text, tags:tags });
}

export async function getPost(postId) {
    console.log("final path", BASE_URL_API + BASE_POST_URL + '/post/' + postId)
    return await API.get( BASE_URL_API + BASE_POST_URL + '/post/' + postId );
}

export async function getPosts() {
    return await API.get( BASE_URL_API + BASE_POST_URL + '/posts' );
}
