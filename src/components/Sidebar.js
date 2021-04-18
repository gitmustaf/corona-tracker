import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Toast, ToastBody, ToastHeader, Badge, List} from 'reactstrap';
import covidApi from '../helpers/covidApi';

import BulletInfo from './BulletInfo';

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
                <Col xs="4" md="4" lg="2" className="Sidebar-Main">
                    <div className="Align-Left Sidebar-Tags mt-2">
                        Confirmed cases worldwide
                    </div>
                    <h6 className="Text-Bold Spacing-Zero text-danger">{parseInt(total.confirmed).toLocaleString()}</h6> 
                    <BulletInfo bulletColor="green" infoText="Recovered" infoData={total.recovered}/>
                    <BulletInfo bulletColor="yellow" infoText="Critical" infoData={total.critical}/>
                    <BulletInfo bulletColor="red" infoText="Deaths" infoData={total.deaths}/>
                    <div color="Warning" className="Text-Batch">Updated {
                        Math.round((((new Date() - new Date(total.lastUpdate)) % 86400000) % 3600000) / 60000)} min ago
                    </div>
                </Col>
                <Col xs="8" md="8" lg="10"></Col>
            </Row>
        </Container>
    )
}

export default Sidebar;