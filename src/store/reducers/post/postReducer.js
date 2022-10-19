import { POST_SET_POSTS } from "../../actions/post/postTypes";

const initialState = {
    posts: ""
};

export const postReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case POST_SET_POSTS:
            return {...state, posts: payload.posts };
        default:
            return state;
    }
};