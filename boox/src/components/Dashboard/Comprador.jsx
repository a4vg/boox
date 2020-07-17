import React, { Component } from "react";
import styles from '../../assets/bootstrap.min.css';
import CompradorBook from './CompradorBook';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class Comprador extends Component {
    render() {
        return (
            <Container fluid>
                <Card className="my-4 p-3" border="primary">
                    <h2>Libros en proceso de comprar</h2>
                    <Row>
                        <Col md={4}>
                            <CompradorBook />
                        </Col>
                        <Col md={4}>
                            <CompradorBook />
                        </Col>
                    </Row>

                </Card>
            </Container>
        );
    }
}

export default Comprador;
