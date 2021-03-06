import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota,index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                indice = {index}
                titulo={nota.title}
                texto={nota.text}
                categoria={nota.categoria} 
                apagarNota={this.props.apagarNota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
