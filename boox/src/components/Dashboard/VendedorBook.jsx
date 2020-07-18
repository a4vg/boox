import React, { Component } from "react";
import bs from '../../assets/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';
import { Link } from "react-router-dom";
import BookIcon from "../../assets/icons/Book.svg";
import GotImg from "../../assets/books/feast-crows/front.JPG"

class VendedorBook extends Component {
    render() {
        return (
            <Card className="p-1 my-2 mx-1 bg-light">
                <Media>
                    <img
                        width={100}
                        height={120}
                        className="align-self-center mr-4 ml-2"
                        src={GotImg}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h4>La Biblia 2</h4>
                        <p style={{textAlign: "left"}}><b>Por Autor</b></p>
                        <Link to="/" className="mr-2">3 usuarios interesados</Link>
                    </Media.Body>
                </Media>
            </Card>
        );
    }
}

export default VendedorBook;