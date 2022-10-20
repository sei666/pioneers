import { POST_SET_POST, POST_SET_POSTS } from "../../actions/post/postTypes";

const initialState = {
    posts: "",
    post: ""
};

export const postReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case POST_SET_POSTS:
            return {...state, posts: payload.posts };
        case POST_SET_POST:
            return {...state, post: payload.post };
        default:
            return state;
    }
};