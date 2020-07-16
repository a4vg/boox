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

class Dashboard extends Component {

    state = {
        comp: 'comprador',
    }

    handleClick = (nextComponent) => {
        this.setState({
            comp: nextComponent
        });
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
                                <p style={{ textAlign: "left" }}>Amo comprar libros y tambien los vendo.</p>
                            </Media.Body>1
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

export default Dashboard;