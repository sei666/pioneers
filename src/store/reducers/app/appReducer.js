import { APP_SET_MODAL_ADD_DISCUSSIONS_SHOW_BOOL, APP_SET_WHAT_POST_GO_TO } from '../../actions/app/appTypes';

const initialState = {
    modalAddDiscussionsShowBool: false,
    whatPostGoTo: 0
};

export const appReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case APP_SET_MODAL_ADD_DISCUSSIONS_SHOW_BOOL:
            return {...state, modalAddDiscussionsShowBool: payload.modalAddDiscussionsShowBool };
        case APP_SET_WHAT_POST_GO_TO:
            return {...state, whatPostGoTo: payload.whatPostGoTo };
        default:
            return state;
    }
};