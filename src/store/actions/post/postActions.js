import { setLike, unsetLike } from "../../../services/likeRequests"
import { getPost, getPosts, postCreate } from "../../../services/postRequests"
import { appSetModalAddDiscussionsShowBool } from "../app/appActions"
import { POST_SET_POST, POST_SET_POSTS } from "./postTypes"

export const postSetPosts = (posts) =>{
    return{
        type: POST_SET_POSTS,
        payload:{
            posts
        }
    }
}

export const postSetPost = (post) =>{
    return{
        type: POST_SET_POST,
        payload:{
            post
        }
    }
}

export const postAsyncSetPosts = () => {
    return function (dispatch){
        getPosts()
            .then(response => {
                console.log(response.data);
                dispatch(postSetPosts(response.data));
            })
            .catch(e => {
                console.log(e);
            });
    }
}

export const postAsyncSetPost = (postId) => {
    return function (dispatch){
        getPost(postId)
            .then(response => {
                console.log(response.data);
                dispatch(postSetPost(response.data));
            })
            .catch(e => {
                console.log(e);
            });
    }
}

export const postAsyncCreatePost = (title, text, tags) =>{
    return function (dispatch){
        postCreate(title, text, tags)
            .then(response => {
                console.log(response.data);
                dispatch(appSetModalAddDiscussionsShowBool(false));
                dispatch(postAsyncSetPosts())
            })
            .catch(e => {
                console.log(e);
            });
    }
}

export const postAsyncSetLike = (postId) => {
    return function (dispatch){
        setLike(postId)
            .then(response => {
                console.log(response.data);
                dispatch(postAsyncSetPosts())
            })
            .catch(e => {
                console.log(e);
            });
    }
}

export const postAsyncUnsetLike = (postId) => {
    return function (dispatch){
        unsetLike(postId)
            .then(response => {
                console.log(response.data);
                dispatch(postAsyncSetPosts())
            })
            .catch(e => {
                console.log(e);
            });
    }
}





