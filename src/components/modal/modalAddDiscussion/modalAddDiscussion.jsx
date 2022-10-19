import React, { Fragment, useEffect, useRef, useState } from "react";
import './modalAddDiscussion.scss';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import Modal from 'react-bootstrap/Modal';
import { appSetModalAddDiscussionsShowBool } from "../../../store/actions/app/appActions";

import SVG from 'react-inlinesvg';
import times from "../../resources/image/addDiscussion/times.svg";

export const ModalAddDiscussion = React.memo( function ModalAddDiscussion(props){
    
    const dispatch = useDispatch();

    const modalAddDiscussionsShowBool = useSelector((state) => state.app.modalAddDiscussionsShowBool, shallowEqual);

    const [tags, setTags] = useState([]);

    const refs = useRef({});

    const tagsItem = ([
        { id: 1, label: 'Students' },
        { id: 2, label: 'Teacher' },
        { id: 3, label: 'Director' },
        { id: 4, label: 'Trainer' }
    ]);

    useEffect(() => {
        if (tags) {
            for (let index = 0; index < tags.length; index++) {
                const itemId = tags[index].id;
                refs.current[itemId].classList.add('disabled');
            }
        }
    }, [tags]);



    const handleRemoveTag = (id) => {
        setTags(tags.filter((item) => item.id !== id));
        if (tags) {
            for (let index = 0; index < tags.length; index++) {
                const itemId = tags[index].id;
                refs.current[itemId].classList.remove('disabled');
            }
        }
    };

    function handleCloseModal() {
        dispatch(appSetModalAddDiscussionsShowBool(false));
        setTags([]);
    }

    
    return(
        <Fragment>

                <Modal
                    className="modalAddDiscussion"
                    show={modalAddDiscussionsShowBool}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onHide={handleCloseModal}
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add discussion
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="modalAddDiscussion__text">Do you have something to share with fellow learners?</div>

                    <Form className="mt-3">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter here" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter here" required />
                        </Form.Group>

                        <div className="mb-3">
                            <div className="modalAddDiscussion__tagTitle">Tags</div>

                            <div className="modalAddDiscussion__tagBlock">
                                    
                                {tags.map((item) => {
                                    return (
                                        <div key={item.id} style={{position:'relative'}}>
                                            <div className="modalAddDiscussion__tag">{item.label}</div>
                                            <div className="modalAddDiscussion__deleteTag" onClick={() => handleRemoveTag(item.id)}>
                                                <SVG src={times}/>
                                            </div>
                                        </div>
                                    )
                                })}
                                

                                
                                <Dropdown>
                                    <Dropdown.Toggle variant="null" id="dropdown-basic">
                                        Add Tag
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>

                                        {tagsItem.map((item) => {
                                            return(
                                                <div 
                                                    key={item.id}
                                                    ref={(element) => refs.current[item.id] = element}
                                                    onClick={()=> setTags((arr) => [...arr, item]) } 
                                                    className="modalAddDiscussion__tagItem"
                                                >
                                                    {item.label}
                                                </div>
                                            )
                                        })}

                                    </Dropdown.Menu>
                                </Dropdown>
                                
                            </div>
                        </div>
                        


                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>

                </Modal.Body>
                </Modal>

        </Fragment>
    )
});