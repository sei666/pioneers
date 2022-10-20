import React, { Fragment, useEffect } from "react";
import './postViewer.scss';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import SVG from 'react-inlinesvg';
import folder from "../resources/image/postViewer/folder.svg";
import caret from "../resources/image/post/caret-up.svg";
import { ModalAddDiscussion } from "../modal/modalAddDiscussion/modalAddDiscussion";
import {  useParams } from "react-router-dom";

import { useMediaQuery } from 'react-responsive';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { postAsyncSetPost } from "../../store/actions/post/postActions";

import { toDateTime } from "../general/functions";



export const PostViewer = React.memo( function PostViewer(props){
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post.post, shallowEqual);
    const authUser = useSelector((state) => state.user.authUser, shallowEqual);

    let { postId } = useParams();

    useEffect(() => {
        console.log(postId);
        dispatch(postAsyncSetPost(postId));
    },[authUser]);

    //   --------------------------------------------Mobile---------------------------------------------------------

    // const isBigScreen = useMediaQuery({ query: '(min-width: 1201px)' })
    // const isDesktop = useMediaQuery({query: '(min-width: 992px) and (max-width: 1199.98px)'})
    // const isLaptop = useMediaQuery({query: '(min-width: 768px) and (max-width: 991.98px)'})
    // const isTablet = useMediaQuery({ query: '(min-width: 576px) and (max-width: 767.98px)' })
    const isMobile = useMediaQuery({ query: '(min-width: 0px) and (max-width: 991.98px)' });

    //   -----------------------------------------------------------------------------------------------------------

    return(
        <Fragment>
            { post && authUser &&
            <>
            <ModalAddDiscussion/>

            <Container fluid="md" className="postViewer">
                <Row>
                    {!isMobile && <Col></Col>}
                    <Col xs={!isMobile ? 6 : 15}>

                        <Breadcrumb>
                            <SVG src={folder}/>
                            <Breadcrumb.Item href="/">Community</Breadcrumb.Item>
                            <Breadcrumb.Item active>Post-viewer</Breadcrumb.Item>
                        </Breadcrumb>

                        <div className="postViewer__post">
                            <div className="d-flex">
                                <div className="postViewer__countBlock">
                                    <SVG src={caret} />
                                    <div className="postViewer__count">{post.likeCounterOfPost}</div>
                                </div>

                                <div className="postViewer__textBlock">
                                    <div className="postViewer__title">
                                        {post.title}
                                        <Button variant="outline-primary">Subscribe to post</Button>
                                    </div>
                                    
                                    <div className="postViewer__creatorPost">
                                        <div className="postViewer__avatar">{post.creator.charAt(0).toUpperCase()}</div>
                                        <div className="postViewer__userName">{post.creator}</div>
                                        <div className="postViewer__separator">•</div>
                                        <div className="postViewer__data">{toDateTime(post.timestamp)}</div>
                                    </div>
                                </div>
                            </div>
                            <div>{post.text}</div>

                            <div className="postViewer__tagBlock">
                                {post.tags && 
                                    post.tags.map((tag) => {
                                        return (
                                            <div key = {tag} className="postViewer__tag">{tag}</div>
                                        )
                                    })
                                }
                            </div>

                        </div>

                        <div className="postViewer__addComment">

                            <div className="postViewer__creatorPost">
                                <div className="postViewer__avatar">{authUser.username.charAt(0).toUpperCase()}</div>
                                <div className="postViewer__userName">{authUser.username}</div>
                                <div className="postViewer__separator">•</div>
                                <div className="postViewer__data">{toDateTime(post.timestamp)}</div>
                            </div>


                            <Form className="mt-3 postViewer__inputForm">
                                <Form.Group className="w-100" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Leave Comment" required />
                                </Form.Group>

                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>

                        </div>

                        {/* {props.postItem[id].comment && 
                            props.postItem[id].comment.map((item) => {
                                return (
                                    <div key={item.id} className="postViewer__commentBlock">

                                        <div className="postViewer__creatorPost">
                                            <div className="postViewer__avatar">{item.userNameCreatorComment.split('')[0]}</div>
                                            <div className="postViewer__userName">{item.userNameCreatorComment}</div>
                                            <div className="postViewer__separator">•</div>
                                            <div className="postViewer__data">{item.data}</div>
                                        </div>

                                        <div className="mt-2">{item.text}</div>

                                    </div>
                                )
                            })
                        } */}


                    </Col>
                    {!isMobile && <Col></Col>}
                </Row>               
            </Container>
              

        </>
        }
        </Fragment>
    )
});