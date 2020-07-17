import React, { Component } from "react";
import styles from '../../assets/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Item from './HistorialItem';


class Historial extends Component {
    render() {
        return (
            <Container fluid>
                <Card className="my-4 p-3" border="primary">
                    <h2>Libros comprados y vendidos</h2>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Libro</th>
                                <th>Precio</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </tbody>
                    </Table>
                </Card>
            </Container>
        );
    }
}


export default Historial;


