import React, { Component } from "react";
import logo from "../../assets/logo.png";
import "./estilo.css";

class Cabecalho extends Component {
  render() {
    return (
      <a className="cabecalho_a" href="#">
        <header className="cabecalho">
          <img className="cabecalho_img" src={logo} alt="logo" />
          <h1 className="cabecalho_titulo">Bloco de Notas</h1>
        </header>
      </a>
    );
  }
}

export default Cabecalho;
