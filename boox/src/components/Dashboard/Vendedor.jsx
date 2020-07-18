import React, { Component } from "react";
import bs from '../../assets/bootstrap.min.css';
import Book from './VendedorBook';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

class Vendedor extends Component {
    render() {
        return (
            <Container fluid>
                <Card className="my-4 p-3" border="primary">
                    <h2>Libros a la venta</h2>
                    <Link to="add-venta"><Button variant="success">Agregar libro</Button></Link>
                    <Row>
                        <Col md={4}>
                            <Book />
                        </Col>
                        <Col md={4}>
                            <Book />
                        </Col>
                        <Col md={4}>
                            <Book />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Book />
                        </Col>
                        <Col md={4}>
                            <Book />
                        </Col>
                        <Col md={4}>
                            <Book />
                        </Col>
                    </Row>
                </Card>
            </Container>
        );
    }
}


export default Vendedor;


