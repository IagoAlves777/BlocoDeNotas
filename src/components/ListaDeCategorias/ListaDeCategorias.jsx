import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    let valorCategoria = e.target.value;
    if (e.key == "Enter") {
      this.props.adcionarCategoria(valorCategoria);
    }
  }
  render() {
    return (
      <section className="listaDeCategorias">
        <ul className="listaDeCategorias_lista">
        {this.props.categorias.map((categoria, index) => {
          return (
            <li className="listaDeCategorias_categoria" key={index}>{categoria}</li>
          );
        })}
        </ul>
        <input
          className="listaDeCategorias_input"
          type="text"
          placeholder="Adcionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
