import { APP_SET_MODAL_ADD_DISCUSSIONS_SHOW_BOOL, APP_SET_WHAT_POST_GO_TO } from "./appTypes"


export const appSetModalAddDiscussionsShowBool = (modalAddDiscussionsShowBool) =>{
    return{
        type: APP_SET_MODAL_ADD_DISCUSSIONS_SHOW_BOOL,
        payload:{
            modalAddDiscussionsShowBool
        }
    }
}

export const appSetWhatPostGoTo = (whatPostGoTo) =>{
    return{
        type: APP_SET_WHAT_POST_GO_TO,
        payload:{
            whatPostGoTo
        }
    }
}