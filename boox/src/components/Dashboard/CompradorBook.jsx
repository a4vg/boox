import React, { Component } from "react";
import bs from '../../assets/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';
import { Link } from "react-router-dom";
import BookIcon from "../../assets/icons/Book.svg";
import DeliveryIcon from "../../assets/icons/delivery.svg"
import GotImg from "../../assets/books/game-thrones/front.JPG"


class CompradorBook extends Component {
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
                        <h4>Game of Thrones</h4>
                        <p style={{textAlign: "left"}}><b>Por George R.R. Martin</b></p>
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