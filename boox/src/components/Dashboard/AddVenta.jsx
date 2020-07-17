import React, { Component } from "react";
import styles from '../../assets/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CloudIcon from '../../assets/icons/cloud.svg';

class AddVenta extends Component {

    state = {
        comp: 'comprador',
        text: 'Amo los libros, pero mas el dinero',
        edit: false,
    }

    render() {

        return (
            <Container>
                <h1>Vender libro</h1>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>ISBN</Form.Label>
                                <Form.Control type="text" placeholder="0-553-21241-9" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Títutlo</Form.Label>
                                <Form.Control type="text" placeholder="Vientos de invierno" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Autor</Form.Label>
                                <Form.Control type="text" placeholder="J.R.R. Tolkien" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Género</Form.Label>
                                <Form.Control as="select">
                                    <option>Aventura</option>
                                    <option>Fantasía</option>
                                    <option>Ciencia Ficción</option>
                                    <option>Acádemico</option>
                                    <option>Infantil</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Estado</Form.Label>
                                <Form.Control as="select">
                                    <option>Nuevo</option>
                                    <option>Reciente</option>
                                    <option>Usado</option>
                                    <option>Muy gastado</option>
                                    <option>Reliquia</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="success" type="submit">Poner en venta</Button>
                        </Form>
                    </Col>
                    <Col>
                        <Card>
                            <img
                                width={144}
                                height={144}
                                className="align-self-center mr-4 ml-2"
                                src={CloudIcon}
                                alt="Generic placeholder"
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AddVenta;