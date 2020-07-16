import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./SearchBox.module.css";

class SearchBox extends Component {
  state = {
    inputVal: ""
  };

  render() {
    return (
      <div
        className={styles.searchbox}
        style={{ width: this.props.width, height: this.props.height }}
        width="100px"
      >
        <input
          type="text"
          placeholder="Busca un libro..."
          onChange={(v) => this.setState({ inputVal: v.target.value })}
        />
        { this.state.inputVal // Deactivate Link if input is empty
          ? <Link to={ `/search?q=${encodeURI(this.state.inputVal)}` }>
              <button>Buscar</button>
            </Link>
          : <button>Buscar</button>
        }
      </div>
    );
  }
}

export default SearchBox;
