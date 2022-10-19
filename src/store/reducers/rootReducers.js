import {combineReducers} from 'redux';
import { appReducer } from './app/appReducer';
import { userReducer } from './user/userReducer';


export const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer
})
