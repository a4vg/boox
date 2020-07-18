import React, { Component } from "react";
import bs from '../../assets/bootstrap.min.css';
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
                                <th><b>Fecha</b></th>
                                <th><b>Libro</b></th>
                                <th><b>Autor</b></th>
                                <th><b>Precio</b></th>
                                <th><b>Estado</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>04/07/2020</td>
                                <td>Festín de Cuervos</td>
                                <td>George R.R. Martin</td>
                                <td>S/. 50.30</td>
                                <td>Vendido</td>
                            </tr>
                            <tr>
                                <td>01/07/2020</td>
                                <td>Tormenta de espadas</td>
                                <td>George R.R. Martin</td>
                                <td>S/. 41.20</td>
                                <td>En espera</td>
                            </tr>
                            <tr>
                                <td>20/06/2020</td>
                                <td>Danza de dragones</td>
                                <td>George R.R. Martin</td>
                                <td>S/. 42.50</td>
                                <td>Vendido</td>
                            </tr>
                            <tr>
                                <td>10/06/2020</td>
                                <td>Juego de Tronos</td>
                                <td>George R.R. Martin</td>
                                <td>S/. 30.30</td>
                                <td>Vendido</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Container>
        );
    }
}


export default Historial;


