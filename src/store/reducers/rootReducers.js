import {combineReducers} from 'redux';
import { appReducer } from './app/appReducer';
import { postReducer } from './post/postReducer';
import { userReducer } from './user/userReducer';
import { commentReducer } from './comment/commentReducer';



export const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    post: postReducer,
    comment: commentReducer
})
