import React, { Fragment, useEffect, useRef } from "react";
import './post.scss';

import SVG from 'react-inlinesvg';
import caret from "../resources/image/post/caret-up.svg";
import comment from "../resources/image/post/comment-alt.svg";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAsyncSetLike, postAsyncSetPosts } from "../../store/actions/post/postActions";

export const Post = React.memo( function Post(props){
    const dispatch = useDispatch()

    const likeCountBlockOfPostRef = useRef(null);

    function handleSetLike(){
        console.log("pressed like");

        dispatch(postAsyncSetLike(props.post.boolLike, props.post.id, true));
    }

    useEffect(() => {
        if (props.post.boolLike){
            likeCountBlockOfPostRef.current.classList.add("permanent-glow");
        }
        else{
            likeCountBlockOfPostRef.current.classList.remove("permanent-glow");
        }
    },[props.post]);

    return(
        <Fragment>

            <div className="post">
                <div ref = {likeCountBlockOfPostRef} onClick = {handleSetLike} className="post__countBlock permanent-glow">
                    <SVG src={caret} />
                    <div className="post__count">{props.post.likeCounterOfPost}</div>
                </div>

                <div className="post__textBlock">
                    <Link className="post__title" to={`/post-viewer/${props.post.id}`}>{props.post.title}</Link>
                    <div className="post__subTitle">{props.post.text}</div>
                    <div className="post__commentBlock">
                        <SVG src={comment} />
                    <div className="post__countComments">{props.post.commentCounterOfPost}</div>
                </div>
                </div>

            </div>

        </Fragment>
    )
});