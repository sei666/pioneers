import { getUserByToken } from "../../../services/userRequests"
import { USER_SET_AUTH_USER } from "./userTypes"

export const userSetAuthUser = (authUser) =>{
    return{
        type: USER_SET_AUTH_USER,
        payload:{
            authUser
        }
    }
}

export const userAsyncSetAuthUser = () =>{
    return function (dispatch){
        getUserByToken()
            .then(response => {
                if (response.data.token === "empty"){
                    console.log(response.data, 'authUserCall');
                    localStorage.setItem('token', "");
                    // dispatch(appSetAuthUser('empty'));
                }
                else{
                    console.log(response.data, "auth");
                    dispatch(userSetAuthUser(response.data));
                }
            })
            .catch(e => {
                console.log('notAuth');
                console.log(e);
            });
    }
}