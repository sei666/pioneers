import axios from "axios";
import API from "./api";

export async function auth(user, pass, captchaNanoIdPass) {
    return await API.post('/api/auth/login', { username: user, password: pass, captchaNanoIdPass: captchaNanoIdPass });
}

export async function logOutApi() {
    return await API.post('/api/auth/logOut');
}

export async function signUp(user, pass, email, captchaNanoIdPass) {
    return await API.post('/api/auth/signup', { username: user, password: pass, email: email, captchaNanoIdPass: captchaNanoIdPass });
}

export async function forgot(email) {
    return await API.post('/api/auth/forgot', { email: email });
}

export async function resetPassword(reset_token, password) {

    const instance = axios.create({
        baseURL: API.defaults.baseURL,
        timeout: 1000,
        headers: {'Authorization': 'Bearer ' + reset_token}
      });

    return await instance.post('/api/auth/resetPassword', { password: password });

    // return await API.post('/api/auth/resetPassword', { reset_token: reset_token, password: password});
}

export async function checkUser(user) {
    return await API.get('/api/auth/checkUniqUser/' + user);
}

export async function checkEmail(email) {
    return await API.get('/api/auth/checkUniqEmail/' + email);
}


export async function autocompliteFindFeed(feed) {
        return await API.get('/api/auth/nameLike/' + feed);
}

export async function getUser(username) {
    return await API.get('/api/auth/getUser/' + username);
    // try {
        // const response = await API.get('/api/auth/getUser/' + username);
        // console.log('👉 Returned data:', response);
        // console.log(response.data)
        // return response
    // } catch (e) {
    //     console.log(`😱 Axios request failed: ${e}`);
    // }
    // return a + b;
}

export async function getUserByToken(){
    return await API.get('/api/auth/getUserByToken');
}

export async function changePassword(oldPassword, newPassword){
    return await API.post('/api/auth/changePasswordApi', { oldPassword: oldPassword, newPassword: newPassword });
}


export async function getFavoriteFeeds(){
    return await API.get('/api/auth/getFavoriteFeeds');
}

export async function favoriteFeedsAddFeed(userId){
    return await API.post('/api/auth/favoriteFeedsAddFeed', {userId: userId});
}

export async function favoriteFeedsDeleteFeed(username){
    return await API.post('/api/auth/favoriteFeedsDeleteFeed', {username: username});
}

export async function checkForExistenceInFavoriteFeeds(userId){
    return await API.post('/api/auth/checkForExistenceInFavoriteFeeds', {userId: userId});
}


export async function changeQuickSearchForYourName(quickSearchForYourName){
    return await API.post('/api/auth/changeQuickSearchForYourName', {quickSearchForYourName: quickSearchForYourName});
}

export async function changeFeedAccessMode(feedAccessMode){
    return await API.post('/api/auth/changeFeedAccessMode', {feedAccessMode: feedAccessMode});
}

export async function endAllOtherSessions(){
    return await API.post('/api/auth/endAllOtherSessions');
}

export async function getUserDevices(){
    return await API.get('/api/auth/getUserDevices');
}

export async function getUserDevicesCount(){
    return await API.get('/api/auth/getUserDevicesCount');
}

export async function deleteUserApi(){
    return await API.post('/api/auth/deleteUserApi');
}

export async function recoveryUserApi(token){
    const instance = axios.create({
        baseURL: API.defaults.baseURL,
        timeout: 1000,
        headers: {'Authorization': 'Bearer ' + token}
      });

    return await instance.post('/api/auth/recoveryUserApi');
}








