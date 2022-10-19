import { USER_SET_AUTH_USER } from "../../actions/user/userTypes";

const initialState = {
    authUser: ""
};

export const userReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case USER_SET_AUTH_USER:
            return {...state, authUser: payload.authUser };
        default:
            return state;
    }
};

