import React, { Component } from "react";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import styles from "./SellerDetails.css";

class SellerDetails extends Component {
  getStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++)
      stars.push(
        <Star
          className={
            i >= this.props.seller.score?
              "emptyStar" : "filledStar"
          }
          key={i}
        />
      );
    return stars;
  };

  render() {
    return this.props.seller? (
      <div className={`sellerDetails ${this.props.className}`}>
        <p>
          {this.props.seller.fullname}
        </p>
        <p><span style={{fontWeight: 700}}>Ubicación:</span> {this.props.seller.location}</p>
        <p>
          <span style={{fontWeight: 700}}>Puntuación:</span>
          {this.getStars()}
        </p>
      </div>
    )
    : <div></div>;
  }
}

export default SellerDetails;
