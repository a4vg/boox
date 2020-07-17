import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';
import { Link } from "react-router-dom";
import BookIcon from "../../assets/icons/Book.svg";


class VendedorBook extends Component {
    render() {
        return (
            <Card className="p-1 my-2 mx-1">
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="align-self-center mr-4 ml-2"
                        src={BookIcon}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h4>La Biblia 2</h4>
                        <p><b>Por Autor</b></p>
                        <Link to="/" className="mr-2">3 usuarios interesados</Link>
                    </Media.Body>
                </Media>
            </Card>
        );
    }
}

export default VendedorBook;