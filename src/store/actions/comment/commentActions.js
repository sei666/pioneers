import { commentCreate, getComments } from "../../../services/commentRequests";
import { COMMENT_SET_COMMENTS } from "./commentTypes";

export const commentSetComments = (comments) =>{
    return{
        type: COMMENT_SET_COMMENTS,
        payload:{
            comments
        }
    }
}


export const commentAsyncSetComments = (postId) => {
    return function (dispatch){
        getComments(postId)
            .then(response => {
                console.log(response.data);
                dispatch(commentSetComments(response.data));
            })
            .catch(e => {
                console.log(e);
            });
    }
}

export const commentAsyncCreateComment = (postId, text) =>{
    return function (dispatch){
        commentCreate(postId, text)
            .then(response => {
                console.log(response.data);
                dispatch(commentAsyncSetComments(postId))
            })
            .catch(e => {
                console.log(e);
            });
    }
}








