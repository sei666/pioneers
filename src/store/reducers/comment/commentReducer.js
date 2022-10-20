import { COMMENT_SET_COMMENTS } from "../../actions/comment/commentTypes";

const initialState = {
    comments: ""
};

export const commentReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case COMMENT_SET_COMMENTS:
            return {...state, comments: payload.comments };
        default:
            return state;
    }
};