import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const NavBarMenu = () => {
    return (
        <div>
            <Navbar   bg="light" expand="lg">

            <Container>
                <Navbar.Brand href="#home">Product</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />                
                <Nav className="me-auto">
                    <NavLink className="show-products-nav" to="/" >Product</NavLink>
                    <NavLink className="add-product-nav" to="/addProduct">Add Product</NavLink>
                                  
                </Nav>               
            </Container>
            </Navbar>
        </div>
    )

}


export default NavBarMenu;