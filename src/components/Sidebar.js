import React, {useState, useEffect} from 'react';
import {Row, Col, Container} from 'reactstrap';
import covidApi from '../helpers/covidApi';

import '../style/sidebar.css';

const Sidebar = (props) => {
    const [totalCovidData, setTotalCovidData] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        covidApi.getData({url:'/totals'})
        .then((response) => {
            setTotalCovidData(response.data);
            setMessage('');
            console.log(response);
        })
        .catch((error) => {
            setMessage("No data found");
            console.log(error);
        })
    });
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
