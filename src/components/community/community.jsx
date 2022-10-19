import React, { Fragment } from "react";
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



export const Community = React.memo( function Community(props){

    //   --------------------------------------------Mobile---------------------------------------------------------

        // const isBigScreen = useMediaQuery({ query: '(min-width: 1201px)' })
        // const isDesktop = useMediaQuery({query: '(min-width: 992px) and (max-width: 1199.98px)'})
        // const isLaptop = useMediaQuery({query: '(min-width: 768px) and (max-width: 991.98px)'})
        // const isTablet = useMediaQuery({ query: '(min-width: 576px) and (max-width: 767.98px)' })
        const isMobile = useMediaQuery({ query: '(min-width: 0px) and (max-width: 991.98px)' });

    //   -----------------------------------------------------------------------------------------------------------


    return(
        <Fragment>

            <ModalAddDiscussion/>

            <Container fluid="md" className="community">
                <Row>
                    {!isMobile && <Col></Col>}
                    
                    <Col xs={!isMobile ? 6 : 15}>
                        <div className="community__block">
                            <div className="community__title">Community</div>
                            <div className="community__subTitle">43 threads avalible</div>
                        </div>
                        <div className="community__block d-flex">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">
                                    <SVG src={search}/>
                                </InputGroup.Text>
                                <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Find a post"
                                />
                            </InputGroup>
                            <DropdownButton
                                variant="outline-primary"
                                title="Trending"
                                id="input-group-dropdown-1"
                            >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>

                        </div>

                        {isMobile && <AddDiscussion/>}

                        {props.postItem && 
                            props.postItem.map((item) =>{
                                return(
                                    <Post item={item} key={item.id} />
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
              


        </Fragment>
    )
});