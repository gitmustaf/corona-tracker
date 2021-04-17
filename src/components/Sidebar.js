import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Toast, ToastBody, ToastHeader, Badge} from 'reactstrap';
import covidApi from '../helpers/covidApi';

import '../style/sidebar.css';

const Sidebar = (props) => {
    const [total, setTotal] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        covidApi.getData({url:'/totals'})
        .then((response) => {
            setTotal(response.data[0]);
            setMessage('');
            console.log(response.data);
        })
        .catch((error) => {
            setMessage("No data found");
            console.log(error);
        })
    },[]);
    return(
        <Container fluid={true} className="Body-Style">
            <Row xs="2" md="2" lg="2" >
                <Col xs="4" md="4" lg="2" className="Sidebar-Main Sidebar-Tags">
                    <span className="Align-Left">Confirmed cases worldwide</span>
                    <Badge color="Secondary">{}</Badge>
                    <h6 color="danger">{total.confirmed}</h6>   
                </Col>
                <Col xs="8" md="8" lg="10"></Col>
            </Row>
        </Container>
    )
}

export default Sidebar;