import React, { Component } from "react";
import "./estilo.css";
import Categoria from "../Categoria"

class ListaDeCategorias extends Component {
  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);
  }
  _handleEventoInput(e) {
    let valorCategoria = e.target.value;
    if (e.key == "Enter") {
      this.props.adcionarCategoria(valorCategoria);
      e.target.value = "";
    }
  }

  render() {
    return (
      <section className="listaDeCategorias">
        <input
          className="listaDeCategorias_input"
          type="text"
          placeholder="Adcionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
        <ul className="listaDeCategorias_lista">
          {this.props.categorias.categorias.map((categoria, index) => {
            return (
              <Categoria
                categoria={categoria}
                indice = {index}
                apagarCategoria={this.props.deletarCategoria}
              />

            );
          })}
        </ul>

      </section>
    );
  }
}

export default ListaDeCategorias;
