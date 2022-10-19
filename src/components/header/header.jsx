import React, { Fragment } from "react";
import './header.scss';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Header = React.memo( function Header(props){

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
                                title="S"
                                id="input-group-dropdown-1"
                                className="avatar"
                            >
                                <Dropdown.Item href="#">sei666</Dropdown.Item>
                                <Dropdown.Item href="#">gur019</Dropdown.Item>
                                <Dropdown.Item href="#">telega815</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item disabled href="#">Select User</Dropdown.Item>
                            </DropdownButton>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Fragment>
    )
});