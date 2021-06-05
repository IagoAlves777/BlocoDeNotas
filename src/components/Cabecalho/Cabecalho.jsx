import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import "./estilo.css";

class Cabecalho extends Component {
  render() {
    return (
      
        <header className="cabecalho">
          <a className="cabecalho" href="#">
            <img className="cabecalho_img" src={logo} alt="logo" />
            <h1 className="cabecalho_titulo">Bloco de Notas</h1>
          </a>
        </header>
    );
  }
}

export default Cabecalho;
