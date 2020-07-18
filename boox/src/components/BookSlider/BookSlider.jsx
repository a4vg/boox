import React, { Component } from "react";
import styles from './BookSlider.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import book1 from '../../assets/books/clash-kings/front.JPG'
import book2 from '../../assets/books/dance-dragons/front.JPG'
import book3 from '../../assets/books/game-thrones/front.JPG'
import book4 from '../../assets/books/storm-swords/front.JPG'
import book5 from '../../assets/books/feast-crows/front.JPG'

class BookSlider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
        };
        return (
            <div className={styles.slider}>
                <h2> {this.props.title} </h2>
                <Slider {...settings}>
                    <div className={styles.bookCard} >
                        <a href="book/0-7776-1226-7">
                            <img src={book1}/>
                            <p>A Clash of Kings </p>
                        </a>
                    </div>
                    <div className={styles.bookCard}>
                        <a href="book/0-8297-8026-2">
                            <img src={book2}/>
                            <p> A Dance with Dragons </p>
                        </a>
                    </div>
                    <div className={styles.bookCard}>
                        <a href="book/0-3899-5104-8" >
                            <img src={book3}/>
                            <p> Game of Thrones </p>
                        </a>

                    </div>
                    <div className={styles.bookCard}>
                        <a href="book/0-4503-6522-0">
                            <img src={book4}/>
                            <p> Storm of Swords </p>
                        </a>
                    </div>
                    <div className={styles.bookCard}>
                        <a href="book/0-6775-0009-2">
                            <img src={book5}/>
                            <p> A Feast for Crows </p>
                        </a>
                    </div>

                </Slider>
            </div>
        );
    }
}

export default BookSlider;
