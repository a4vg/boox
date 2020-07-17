import React, { Component } from "react";
import { Range } from "rc-slider";
import styles from "./SearchFilters.module.css";
import "rc-slider/assets/index.css";

class SearchFilters extends Component {
  state = {
    filters: {
      untitled: ["Compra", "Alquiler", "Intercambio"],
      Estado: ["Nuevo", "Buen estado", "Mal estado"],
      Género: [
        "Académico",
        "Aventuras",
        "Ciencia ficción",
        "Clásicos",
        "Distopía",
        "Fantasía",
        "Humor",
        "Misterio",
        "Mitología",
        "Policiaca",
        "Terror",
      ],
    },
    range: [0, 70]
  }

  getDistanceMessage = () => {
    let { range } = this.state;
    if (range[0] === range[1])
      return `Exactamente a ${range[0]}km`;
    if (range[0]===0 && range[1]===70)
      return "Cualquier distancia";
    return `Entre ${this.state.range[0]}km y ${this.state.range[1]}km`;
  }

  render() {
    return (
      <div className={styles.filterContainer}>
        <div className={styles.filterTitle}>Filtros</div>
        <div className={styles.filters}>
          <div>
            {this.state.filters.untitled.map((f, idx) => (
              <label key={idx}>
                <span className={styles.labelText}>{f}</span>
                <input type="checkbox" value={f} />
                <span className={styles.customCheckbox}></span>
              </label>
            ))}
          </div>
          <div>
            <legend>Estado:</legend>
            {this.state.filters.Estado.map((f, idx) => (
              <label key={idx}>
                <span className={styles.labelText}>{f}</span>
                <input type="checkbox" value={f} />
                <span className={styles.customCheckbox}></span>
              </label>
            ))}
            <legend>Género:</legend>
            {this.state.filters.Género.map((f, idx) => (
              <label key={idx}>
                <span className={styles.labelText}>{f}</span>
                <input type="checkbox" value={f} />
                <span className={styles.customCheckbox}></span>
              </label>
            ))}
            <legend>Ubicación:</legend>
            <label>{ this.getDistanceMessage() }
            </label>
            <span className={styles.sliderWrapper}>
              <Range
                onChange={(v) => this.setState({ range: v })}
                handleStyle={[
                  { borderColor: "#334795" },
                  { borderColor: "#334795" },
                ]}
                trackStyle={[{ backgroundColor: "#334795" }]}
                allowCross={false}
                defaultValue={[0, 70]}
                min={0}
                max={70}
                step={10}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFilters;
