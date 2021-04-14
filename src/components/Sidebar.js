import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import '../style/sidebar.css';

const Sidebar = (props) => {
    return(
        <Container fluid={true} className="Body-Style">
            <Row xs="2" md="2" lg="2" >
                <Col xs="4" md="4" lg="2" className="Sidebar-Main">
                
                </Col>
                <Col xs="8" md="8" lg="10"></Col>
            </Row>
        </Container>
    )
}

export default Sidebar;
