import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Vendedor from './Vendedor';
import Comprador from './Comprador';
import Historial from './Historial';
import Media from 'react-bootstrap/Media';
import ProfileIcon from "../../assets/icons/profile-icon.svg";

class Profile extends Component {

    state = {
        comp: 'comprador',
        text: 'Amo los libros, pero mas el dinero',
        edit: false,
    }

    render() {

        return (
            <Container>
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
                                        <p style={{ textAlign: "left" }} className="ml-3">{ this.state.text }</p>
                                        <Button className="ml-2" onClick={() => { this.setState({ edit: true }) }}>Edit</Button>
                                    </Row>
                                }

                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
                <Row className="mt-4 mb-0">
                    <Container fluid className="mt-0">
                        <Button type="button" onClick={() => { this.setState({ comp: 'vendedor' }) }}>Vendedor</Button>
                        <Button type="button" onClick={() => { this.setState({ comp: 'comprador' }) }}>Comprador</Button>
                        <Button type="button" onClick={() => { this.setState({ comp: 'historial' }) }}>Historial</Button>
                    </Container>
                </Row>
                <Row>
                    {this.state.comp === 'vendedor' && <Vendedor />}
                </Row>
                <Row>
                    {this.state.comp === 'comprador' && <Comprador />}
                </Row>
                <Row>
                    {this.state.comp === 'historial' && <Historial />}
                </Row>
            </Container>
        );
    }
}

export default Profile;