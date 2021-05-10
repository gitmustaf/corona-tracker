import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Toast, ToastBody, ToastHeader, Badge, List} from 'reactstrap';
import covidApi from '../helpers/covidApi';

import BulletInfo from './BulletInfo';
import HeadingInfo from './HeadingInfo';
import SearchComponent from './SearchComponent';

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
        <Container fluid={true} className="body-style">
            <Row xs="12" md="12" lg="2" >
                <Col xs="12" md="12" lg="2" className="sidebar-main col-md-auto">
                    <HeadingInfo headingText="Confirmed cases worldwide" headingData={total.confirmed}/>                        
                    <BulletInfo bulletColor="green" infoText="Recovered" infoData={total.recovered}/>
                    <BulletInfo bulletColor="yellow" infoText="Critical" infoData={total.critical}/>
                    <BulletInfo bulletColor="red" infoText="Deaths" infoData={total.deaths}/>
                    <div color="Warning" className="text-batch">Updated {
                        Math.round((((new Date() - new Date(total.lastUpdate)) % 86400000) % 3600000) / 60000)} min ago
                    </div>
                    <hr/>
                    <SearchComponent />
                </Col>
                <Col xs="8" md="8" lg="10"></Col>
            </Row>
        </Container>
    )
}

export default Sidebar;