import React, { Component } from "react";
import "./estilo.css";
import deleteSVG from "../../assets/img/delete.svg";
class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  render() {
    return (
      <section className="card-nota">
        <div className="card-nota_options">
          <h4 className="card-nota_categoria">{this.props.categoria}</h4>
          <img src={deleteSVG} onClick={this.apagar.bind(this)}></img>
        </div>
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
        
      </section>
    );
  }
}

export default CardNota;
