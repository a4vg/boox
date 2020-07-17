import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';
import { Link } from "react-router-dom";
import BookIcon from "../../assets/icons/Book.svg";
import DeliveryIcon from "../../assets/icons/delivery.svg"


class CompradorBook extends Component {
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
                        <p style={{textAlign: "left"}}><b>Por Autor</b></p>
                        <Link to="/" className="mr-2">Estado: <img
                            width={32}
                            height={32}
                            className="align-self-center mr-4 ml-2"
                            src={DeliveryIcon}
                            alt="Generic placeholder"
                        /></Link>
                    </Media.Body>
                </Media>
            </Card>
        );
    }
}

export default CompradorBook;