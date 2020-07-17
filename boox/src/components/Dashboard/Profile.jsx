import React, { Component } from "react";
import styles from '../../assets/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Media from 'react-bootstrap/Media';
import Vendedor from './Vendedor';
import Comprador from './Comprador';
import Historial from './Historial';
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import Card from "react-bootstrap/esm/Card";

class Profile extends Component {

    state = {
        text: 'Amo los libros, pero mas el dinero',
        edit: false,
    }

    render() {

        return (
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Media>
                            <img
                                width={144}
                                height={144}
                                className="align-self-center mr-4 ml-2"
                                src={ProfileIcon}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                {this.props.account ? <h1 color="primary"><b>{this.props.account.username}</b></h1> : <p>No hay cuenta</p>}
                                {this.state.edit ?
                                    <Row>
                                        <input type='text' name='description' onChange={e => { this.setState({ text: e.target.value }) }}></input>
                                        <Button onClick={() => { this.setState({ edit: false }) }}>Apply</Button>
                                    </Row> :
                                    <Row>
                                        <p style={{ textAlign: "left" }} className="ml-3">{this.state.text}</p>
                                        <Button className="ml-2" onClick={() => { this.setState({ edit: true }) }}>Edit</Button>
                                    </Row>
                                }

                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
                <Row className="mt-4 mb-0">
                    <Container fluid className="mt-0">
                        <Tabs defaultActiveKey="vendedor" id="uncontrolled-tab-example">
                            <Tab eventKey="vendedor" title="Vendedor">
                                <Card>
                                    <Vendedor />
                                </Card>
                            </Tab>
                            <Tab eventKey="comprador" title="Comprador">
                                <Card>
                                    <Comprador />
                                </Card>
                            </Tab>
                            <Tab eventKey="historial" title="Historial">
                                <Card>
                                    <Historial />
                                </Card>
                            </Tab>
                        </Tabs>
                    </Container>
                </Row>
            </Container>
        );
    }
}

export default Profile;