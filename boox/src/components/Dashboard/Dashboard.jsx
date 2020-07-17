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

    constructor(props, context) {
        super(props, context);

        this.state = {
            component: 'comprador',
        };

        this.handleClick = this.handleClick.bind(this);
    }

    chooseComponent(component) {
        var nextComponent;

        if (component === 'comprador') {
            nextComponent = component;
        }
        if (component === 'vendedor') {
            nextComponent = component;
        }
        if (component === 'historial') {
            nextComponent = component;
        }
        this.handleClick(nextComponent);
    }

    handleClick(component) {
        this.setState({
            comprador: component,
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
                                <h1 color="primary"><b>Menganito</b></h1>
                                <p>Amo comprar libros y tambien los vendo.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
                <Row className="mt-4 mb-0">
                    <Container fluid className="mt-0">
                        <Button type="button" onClick={this.chooseComponent('comprador')}>Comprador</Button>
                        <Button type="button" onClick={this.chooseComponent('vendedor')}>Vendedor</Button>
                        <Button type="button" onClick={this.chooseComponent('historial')}>Historial</Button>
                    </Container>
                </Row>
                <Row>
                {this.state.component === 'comprador' && <Comprador />}
                </Row>
                <Row>
                {this.state.component === 'vendedor' && <Vendedor />}
                </Row>
                <Row>
                {this.state.component === 'historial' && <Historial />}
                </Row>
            </Container>
        );
    }
}

export default Dashboard;