import React, { Component } from "react";
import { ReactComponent as ProposalIcon } from "../../../assets/icons/handshake.svg";
import { ReactComponent as PaymentIcon } from "../../../assets/icons/credit-cards.svg";
import { ReactComponent as OnItsWayIcon } from "../../../assets/icons/delivery.svg";
import { ReactComponent as ReceivedIcon } from "../../../assets/icons/box.svg";
import styles from "./PurchaseStage.module.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

class PurchaseStage extends Component {
  state = {
    currentStage: 0,
    stages: [
      {
        name: "Propuesta",
        icon: ProposalIcon
      },
      {
        name: "Pago",
        icon: PaymentIcon
      },
      {
        name: "En camino",
        icon: OnItsWayIcon
      },
      {
        name: "Recibido",
        icon: ReceivedIcon
      }
    ]
  };


  render() {
    return (
      <div className={styles.progressBarWrapper}>
        <ProgressBar
          percent={this.state.currentStage * 100 / (this.state.stages.length-1)}
          filledBackground="#5CA2DB"
        >
          {this.state.stages.map(({name, icon}, idx) => {
            return (
              <Step key={idx}>
                {(done) =>
                  <div className={styles.stage}>
                    {
                      icon.render({
                        className: `${styles.icon} ${
                          done.accomplished && styles.done
                        }`
                      })
                    }
                    <h5 className={done.accomplished && styles.done}>{name}</h5>
                  </div>
                }
              </Step>
            );
          })}
        </ProgressBar>
      </div>
    );
  }
}

export default PurchaseStage;
