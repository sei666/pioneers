import API from "./api";
import MINIO from "./apiMinio"
import axios from "axios";
import {getExt} from "../components/feeds/feedmain/file/function";
import { shallowEqual, useSelector } from "react-redux";
import { BASE_URL_STORAGE } from "./urlConstants";


export async function createNewPost(userId , text, files , onLock, onFavorite, onPinned, categoryId, captchaNanoIdPass, socketId) {
    return await API.post('/api/postAdd', { userId: userId, text: text, files: files, onLock: onLock, onFavorite: onFavorite,
         onPinned: onPinned, categoryId: categoryId, captchaNanoIdPass: captchaNanoIdPass, socketId: socketId});
}

export async function uploadFile(url, file, setterProgressBar,index) {
    // try {
        // const size = file.size;
        let finalType = file.type;
        //for IE support
        if (getExt(file.name) == "webp"){
            finalType = "image/webp";
        }
        if (getExt(file.name) == "mkv"){
            finalType = "video/x-matroska";
        }
        return await axios.put(url, file, {
            headers: {
                'Content-Type': finalType,
                // 'Content-Disposition': "attachment; filename*=UTF-8''" + encodeURI(file.name)
                // For work "," in name
                // 'Content-Disposition': "attachment;filename=\"" + encodeURI(file.name) + "\""
                'Content-Disposition': "attachment;filename*=UTF-8''" + encodeURIComponent(file.name)

              },
            onUploadProgress: progressEvent => {
                // console.log(index,"index", 100*progressEvent.loaded/file.size);
                // let copyArray = [...progressBarArray];
                // copyArray[index] = 100*progressEvent.loaded/file.size;
                
                setterProgressBar(index, Math.round(100*progressEvent.loaded/file.size));
                // setProgressBar(progressBarRef);
                // setProgressBarArray(copyArray);
            }
        });

        // console.log(url);
        // console.log('👉 Returned data:', response);
        // console.log(response.data)
    // } catch (e) {
    //     console.log(`😱 Axios request failed: ${e}`);
    // }
    // return a + b;
}


export async function confirmUploadFile(postId, fileId) {
    return await API.get('/api/fileConfirm/'+ postId + '/' + fileId);
}
export async function confirmAllUploadFiles(postId, countLastElementsToConfirm, socketId) {
    return await API.post('/api/filesConfirmAll', { postId: postId, countLastElementsToConfirm: countLastElementsToConfirm, socketId: socketId });
}


export async function getPost(postId) {
    return await API.get('/api/postGet/' + postId);
}

export async function getPosts(userId, lastId, favoriteShow = false, privateShow = false, searchWord = "", categoryId = "all") {
    return await API.post('/api/posts', { userId: userId, lastId: lastId, favoriteShow: favoriteShow, privateShow: privateShow, searchWord: searchWord, categoryId: categoryId });
}

// export async function getSharePost(postId) {
//     return await API.get('/api/sharedPostGet/' + postId);
// }

// export async function getShareFile(postId, fileId) {
//     return await API.get('/api/sharedFileGet/' + postId + '/' + fileId);
// }

export async function createShareUrlForElement(postId, fileId = ""){
    return await API.post('/api/urlShareCreateApi', { postId: postId, fileId: fileId });
}


export async function deleteShareUrlForElement(postId, fileId = ""){
    return await API.delete('/api/urlShareDeleteApi', {data: { postId: postId, fileId: fileId}});
}

export async function getShareElementByHash(hashUrl) {
    return await API.get('/api/urlShareGetElementApi/' + hashUrl);
}

export async function getUrlForDownload(postIdentifier, fileIdentifier) {
    return await API.get('/api/fileDownload/'+ postIdentifier + '/' + fileIdentifier);
}

export async function getUrlForWatching(postIdentifier, fileIdentifier) {
    return await API.get('/api/getUrlForWatchingApi/'+ postIdentifier + '/' + fileIdentifier);
}

export async function getFilesForPost(postId) {
    return await API.get('/api/filesForPostApi/'+ postId);
}


export async function addCommentForPost(postId, text, socketId, captchaNanoIdPass) {
    return await API.post('/api/commentCreateForPostApi', { postId: postId, text: text, socketId: socketId, captchaNanoIdPass: captchaNanoIdPass });
}

export async function getCommentsForPost(postId) {
    return await API.get('/api/commentsForPostApi/'+ postId);
}

export async function deleteCommentForPost(postId, commentId) {
    return await API.delete('/api/commentDeleteForPostApi/'+ postId + '/' + commentId);
}


export async function changeModificatorForPost(postId, mode, modeBool, socketId) {
    return await API.post('/api/changeModificatorForPostApi', { postId: postId, mode: mode, modeBool: modeBool, socketId: socketId });
}


export async function deleteFilesForPost(postId, files){
    return await API.delete('/api/deleteFilesForPostApi', {data: { postId: postId, files: files}});
}

export async function editPostApi(postId, text, files, filesForDelete, onLock, onFavorite, onPinned, categoryId, socketId){
    return await API.post('/api/editPostApi', { postId: postId, text: text, files: files, filesForDelete: filesForDelete,
         onLock: onLock, onFavorite: onFavorite, onPinned: onPinned, categoryId:categoryId, socketId: socketId
    });
}


export async function deletePost(postId){
    return await API.delete('/api/deletePostForUserApi/' + postId);
}


export async function getAllUrlsForDownloadPost(postIdentifier){
    return await API.get('/api/getAllUrlsForDownloadPost/' + postIdentifier);
}



export async function getPostCategories(userId){
    return await API.post('/api/getPostCategoriesApi', { userId: userId});
}

export async function syncChangeCategories(changedCategories){
    return await API.post('/api/syncChangeCategoriesApi', { changedCategories: changedCategories});
}

export async function setCustomAvatarForUser(file, socketId){
    const url = BASE_URL_STORAGE + ':5006/api/setCustomAvatarForUser';

    var formData = new FormData();
    formData.append("file", file);
    formData.append("socketId", socketId);

    return await API.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    });
}

export async function deleteAvatarForUser(socketId){
    const url = BASE_URL_STORAGE + ':5006/api/deleteCustomAvatarForUser';
    
    return await API.post(url, { socketId: socketId});
}







// export async function postDownloadApi(urlsWithNames){
//     const method = 'GET';
//     const url = 'http://192.168.1.65:5000/api/postDownloadApi';
//     // return await axios.request({

//     //     url,

//     //     method,

//     //     responseType: 'blob', //important

//     //   })
//     return await API.post('/api/postDownloadApi', {urlsWithNames: urlsWithNames}, 
//     {
//         responseType: 'blob',
//         onDownloadProgress: progressEvent => {
//             // console.log(index,"index", 100*progressEvent.loaded/file.size);
//             // let copyArray = [...progressBarArray];
//             // copyArray[index] = 100*progressEvent.loaded/file.size;

//             console.log(progressEvent.loaded);
//             console.log(progressEvent.total);
//             // let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//             // console.log(percentCompleted);
            
//             // setterProgressBar(index, 100*progressEvent.loaded/file.size);
//             // setProgressBar(progressBarRef);
//             // setProgressBarArray(copyArray);
//         }
//     })
// }

