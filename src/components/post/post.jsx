import React, { Fragment } from "react";
import './post.scss';

import SVG from 'react-inlinesvg';
import caret from "../resources/image/post/caret-up.svg";
import comment from "../resources/image/post/comment-alt.svg";

import { Link } from "react-router-dom";

export const Post = React.memo( function Post(props){


    return(
        <Fragment>

            <div className="post">
                <div className="post__countBlock">
                    <SVG src={caret} />
                    <div className="post__count">{props.item.postLike}</div>
                </div>

                <div className="post__textBlock">
                    <Link className="post__title" to={`/post-viewer/${props.item.id}`}>{props.item.title}</Link>
                    <div className="post__subTitle">{props.item.subTitle}</div>
                    <div className="post__commentBlock">
                        <SVG src={comment} />
                    <div className="post__countComments">{props.item.countComments}</div>
                </div>
                </div>

            </div>

        </Fragment>
    )
});