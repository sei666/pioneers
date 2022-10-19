import React, { Fragment } from "react";
import './addDiscussion.scss';

import { useDispatch } from "react-redux";
import { appSetModalAddDiscussionsShowBool } from "../../store/actions/app/appActions";

import Button from 'react-bootstrap/Button';

import SVG from 'react-inlinesvg';
import plus from "../resources/image/addDiscussion/plus.svg";
import { userAsyncSetAuthUser } from "../../store/actions/user/userActions";



export const AddDiscussion = React.memo( function AddDiscussion(props){

    const dispatch = useDispatch();

    function handleTest(){
        dispatch(userAsyncSetAuthUser());
    }

    return(
        <Fragment>

            <div className="addDiscussion">
                <div className="addDiscussion__fakeButton">
                    <div onClick={handleTest} className="addDiscussion__fakeButtonBorder">
                        <SVG src={plus}/>
                    </div>
                </div>
                <div className="addDiscussion__title">Add discussion</div>
                <div className="addDiscussion__subTitle">Do you have something to share with fellow learners?</div>
                <Button variant="outline-primary w-100" onClick={()=> dispatch(appSetModalAddDiscussionsShowBool(true))}>Create Thread</Button>
            </div>

        </Fragment>
    )
});