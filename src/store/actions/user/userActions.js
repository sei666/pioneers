import { getUserByToken, login } from "../../../services/userRequests"
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

export const userAsyncLogin = (username, password) =>{
    return function (dispatch){
        login(username, password)
            .then(response => {
                console.log(response.data);
                if (response.data.token){
                    localStorage.setItem('token', response.data.token);
                    window.location.reload(false);
                }
            })
            .catch(e => {
                console.log(e);
            });
    }
}