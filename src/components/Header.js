import React from 'react';
import logo from '../assets/covid19.png';
import '../style/header.css';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';

const Header = (props) => {

    return(
        <div>
            <Navbar color="light" light expand="lg md xs">
                <NavbarBrand href="/">
                    <img src={logo} alt="Corona" className="covid-icon"/>
                    Tracker
                </NavbarBrand>
                <Nav className="mr-auto row"  navbar>
                    <NavItem className="col">
                        <NavLink href="/cases">Cases</NavLink>
                    </NavItem>
                    <NavItem className="col">
                        <NavLink href="/vaccines">Vaccines</NavLink>
                    </NavItem>
                    <NavItem className="col">
                        <NavLink href="/maps">Maps</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText className="mr-2">Mustaf Hussain</NavbarText>
            </Navbar>
        </div>
    )
}

export default Header;