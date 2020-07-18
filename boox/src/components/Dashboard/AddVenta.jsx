import React, { Component } from "react";
import bs from '../../assets/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import CloudIcon from '../../assets/icons/cloud.svg';
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";

class AddVenta extends Component {

    state = {
        comp: 'comprador',
        text: 'Amo los libros, pero mas el dinero',
        edit: false,
        finished: false,
    }

    Finished = () => {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Button variant="success" block onClick={handleShow}><h3>Poner en venta</h3></Button>

                <Modal show={show} onHide={handleClose}>

                    <Modal.Body>Se guardo el libro</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    render() {

        return (
            <Container className="mt-5">
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
                            <hr></hr>
                            <div style={{ textAlign: "center" }}>
                                <this.Finished />
                            </div>
                        </Form>
                    </Col>
                    <Col>
                        <Card>
                            <Image src={CloudIcon} height={128} className="my-4" />
                            <Card.Body style={{ textAlign: 'center' }}><b>Sube fotos de tu libro.</b></Card.Body>
                        </Card>
                        <Alert variant='primary'>Al menos una foto es requerida.</Alert>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AddVenta;