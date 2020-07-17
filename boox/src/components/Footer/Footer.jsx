import React, {Component} from "react";
import styles from './Footer.module.css'

class Footer extends Component{
    render() {
        return(
            <footer className={styles.siteFooter}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>Acerca de</h6>
                            <p className="text-justify">BooX es una plataforma que permite el intercambio, venta y donación de
                                libros usados que se encuentran en buen estado. Nuestro compromiso es la difusión de la cultura
                                a través de un enfoque sostenible.
                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categorías</h6>
                            <ul className="footerLinks">
                                <li><a href="#">Compra</a> </li>
                                <li><a href="#">Vende</a> </li>
                                <li><a href="#">Intercambia</a> </li>
                                <li><a href="#">Donde</a> </li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Enlaces Rápidos</h6>
                            <ul className="footer-links">
                                <li><a href="#">Nosotros</a> </li>
                                <li><a href="#">Contáctanos</a> </li>
                                <li><a href="#">Política de Privacidad</a> </li>
                                <li><a href="#">Preguntas Frecuentes</a> </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                                <a href="#"> BooX</a>.
                            </p>
                        </div>

                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
