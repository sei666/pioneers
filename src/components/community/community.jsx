import React, { Fragment, useEffect, useRef, useState } from "react";
import './community.scss';

import { AddDiscussion } from "../addDiscussion/addDiscussion";
import { Post } from "../post/post";

import { useMediaQuery } from 'react-responsive';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Pagination from 'react-bootstrap/Pagination';

import SVG from 'react-inlinesvg';
import search from "../resources/image/community/search.svg";
import { ModalAddDiscussion } from "../modal/modalAddDiscussion/modalAddDiscussion";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { postAsyncSetPosts } from "../../store/actions/post/postActions";



export const Community = React.memo( function Community(props){
    const dispatch = useDispatch();
    const authUser = useSelector((state) => state.user.authUser, shallowEqual);
    const posts = useSelector((state) => state.post.posts, shallowEqual);
    const searchWordRef = useRef(null);
    const [methodSort, setMethodSort] = useState("Without")


    function handleSearchPosts (e) {
        if (!e){
            e = methodSort;
        }
        dispatch(postAsyncSetPosts(e, searchWordRef.current.value));
    }

    function handleChangeSort (e) {
        setMethodSort(e);
        handleSearchPosts(e);
    }

    useEffect(() => {
        dispatch(postAsyncSetPosts())
    },[]);

    //   --------------------------------------------Mobile---------------------------------------------------------

        // const isBigScreen = useMediaQuery({ query: '(min-width: 1201px)' })
        // const isDesktop = useMediaQuery({query: '(min-width: 992px) and (max-width: 1199.98px)'})
        // const isLaptop = useMediaQuery({query: '(min-width: 768px) and (max-width: 991.98px)'})
        // const isTablet = useMediaQuery({ query: '(min-width: 576px) and (max-width: 767.98px)' })
        const isMobile = useMediaQuery({ query: '(min-width: 0px) and (max-width: 991.98px)' });

    //   -----------------------------------------------------------------------------------------------------------


    return(
        <Fragment>
            {authUser &&
            <>
            <ModalAddDiscussion/>

            <Container fluid="md" className="community">
                <Row>
                    {!isMobile && <Col></Col>}
                    
                    <Col xs={!isMobile ? 6 : 15}>
                        <div className="community__block">
                            <div className="community__title">Community</div>
                            <div className="community__subTitle">{posts.length} threads avalible</div>
                        </div>
                        <div className="community__block d-flex">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">
                                    <SVG onClick={handleSearchPosts} src={search}/>
                                </InputGroup.Text>
                                <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Find a post"
                                ref = {searchWordRef}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        handleSearchPosts();  
                                    }
                                }}
                                />
                            </InputGroup>
                            <DropdownButton
                                variant="outline-primary"
                                title={methodSort}
                                id="input-group-dropdown-1"
                                onSelect={handleChangeSort}
                            >
                                <Dropdown.Item eventKey="Without" href="#">Without</Dropdown.Item>
                                <Dropdown.Item eventKey="Trending up" href="#">Trending up</Dropdown.Item>
                                <Dropdown.Item eventKey="Trending down" href="#">Trending down</Dropdown.Item>
                            </DropdownButton>

                        </div>

                        {isMobile && <AddDiscussion/>}

                        {posts && 
                            posts.map((post) =>{
                                return(
                                    <Post post={post} key={post.id} />
                                )  
                            })
                        }


                        <Pagination>
                            <Pagination.Prev className='page-item-prev' />

                            <Pagination.Item className="page-item-center" active >{1}</Pagination.Item>
                            <Pagination.Item className="page-item-center">{2}</Pagination.Item>
                            <Pagination.Item className="page-item-center">{3}</Pagination.Item>

                            <Pagination.Next className='page-item-next' />
                        </Pagination>

                        

                    </Col>
                    {!isMobile && 
                        <Col>
                            <AddDiscussion/>
                        </Col>
                    }
                </Row>               
            </Container>
              

            </>
        }
        </Fragment>
    )
});