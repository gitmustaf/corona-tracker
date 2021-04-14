import react from 'react';
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
            <Navbar color="light" className="clearfix" light expand="md" navbar style={{width: "100%"}}>
                <NavbarBrand href="/">Corona Tracker</NavbarBrand>
                <Nav className="mar-auto" navbar>
                    <NavItem>
                        <NavLink href="/cases">Cases</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/vaccines">Vaccines</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/maps">Maps</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText className="float-right" style={{marginLeft:'70%'}}>Mustaf Hussain</NavbarText>
            </Navbar>
        </div>
    )
}

export default Header;