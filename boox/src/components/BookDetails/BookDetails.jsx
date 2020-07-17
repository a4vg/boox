import React, { Component } from 'react';
import styles from "./BookDetails.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";


class BookDetails extends Component {
  render() {
    return (
			<>
			<button className={ styles.return }>Volver a busqueda</button> 
      <h2 className={ styles.BookDetails }>{ this.props.match.params.id } por Autor</h2>
			<div className={ styles.row }>
				<div className={ styles.columnEdge }>
					&lt;
				</div>
				<div className={ styles.column }>
					<div className={ styles.mainImgContainer }>
	  				<img src={ Logo } />
	  			</div>
	  			<div className={ styles.row }>
	  				<div className={ styles.imgColumn }>
	  				<div className={ styles.otherImgContainer }>
	  					<img src={ Logo } />
	  				</div>
	  				</div>
	  				<div className={ styles.imgColumn }>
	  				<div className={ styles.otherImgContainer }>
	  					<img src={ Logo } />
	  				</div>
	  				</div>
	  				<div className={ styles.imgColumn }>
	  				<div className={ styles.otherImgContainer }>
	  					<img src={ Logo } />
	  				</div>
	  				</div>
	  				<div className={ styles.imgColumn }>
	  				<div className={ styles.otherImgContainer }>
	  					<img src={ Logo } />
	  				</div>
	  				</div>
	  				<div className={ styles.imgColumn }>
	  				<div className={ styles.otherImgContainer }>
	  					<img src={ Logo } />
	  				</div>
	  				</div>
	  			</div>
	  			<div className={ styles.ptsContainer }>
	  					Puntaje: <img/> estrellas img
	  			</div>
				</div>
				<div className={ styles.column }>
					<h1 className={ styles.BookDetails }>S/.50.00</h1>
					<h3 className={ styles.BookDetails }>Detalles del libro</h3>
					<p className={ styles.BookDetails }>Estado: --{ this.props.match.params.estado }</p>
					<p className={ styles.BookDetails }>Genero: --{ this.props.match.params.genero }</p>
					<p className={ styles.BookDetails }>ISBN: --{ this.props.match.params.isbn }</p>
					<div className={ styles.row }>
						<div className={ styles.subcolumn }>
							<h3 className={ styles.BookDetails }>Vendedor</h3>
							<p className={ styles.BookDetails }>
							<Link to="/dashboard/{ this.props.match.params.vendedor }">
								--{ this.props.match.params.vendedor }
							</Link></p>
						</div>
						<div className={ styles.subolumn }>
							<button className={ styles.contact }>Contactar</button> 
						</div>
					</div>
				</div>
				<div className={ styles.columnEdge }>
					&gt;
				</div>
			</div>
			</>
		);
  }
}

export default BookDetails;
