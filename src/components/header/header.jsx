import React, { Fragment, useEffect, useState } from "react";
import './header.scss';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch } from "react-redux";
import { userAsyncLogin, userAsyncSetAuthUser } from "../../store/actions/user/userActions";

export const Header = React.memo( function Header(props){
    const dispatch = useDispatch();
    const [select, setSelect] = useState("S");

    function handleLogin(username){
        console.log("handleLogin");
        localStorage.setItem('username', username);
        setSelect(username.charAt(0).toUpperCase());
        dispatch(userAsyncLogin(username, 'password'));
    }

    function handleChangeUser(e){
        console.log("handleChangeUser");
        handleLogin(e);
    }

    useEffect(() => {
        console.log("useEffect")
        var username = localStorage.getItem('username');
        var token = localStorage.getItem('token');
        if (token && username){
            console.log("exist");
            setSelect(username.charAt(0).toUpperCase());
            dispatch(userAsyncSetAuthUser());
        }
        else{
            console.log("not exist");
            username = 'sei';
            handleLogin(username);
        }
    },[]);

    return(
        <Fragment>
              
              <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">
                                <Button variant="outline-secondary">Strategy</Button>
                            </Nav.Link>
                            <Nav.Link href="#cousres">
                                <Button variant="outline-secondary">Cousres</Button>
                            </Nav.Link>
                            <Nav.Link href="#advice">
                                <Button variant="outline-secondary">Advice</Button>
                            </Nav.Link>
                            <Nav.Link href="#jobs">
                                <Button className="activeBtn" variant="outline-secondary">Jobs</Button>
                            </Nav.Link>
                            <Nav.Link href="#community">
                                <Button variant="outline-secondary">Community</Button>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="outline-primary">My Courses</Button>
                            {/* <div className="avatar">A</div> */}

                            <DropdownButton
                                variant="outline-primary"
                                title={select}
                                id="input-group-dropdown-1"
                                className="avatar"
                                onSelect={handleChangeUser}
                            >
                                <Dropdown.Item eventKey="sei" href="#">sei</Dropdown.Item>
                                <Dropdown.Item eventKey="gur" href="#">gur</Dropdown.Item>
                                <Dropdown.Item eventKey="telega" href="#">telega</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item disabled href="#">Select User</Dropdown.Item>
                            </DropdownButton>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Fragment>
    )
});