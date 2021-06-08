import React, { Component } from "react";
import "./estilo.css";
import fechar from "../../assets/img/botao-fechar.svg";

class Categoria extends Component {

    deletar() {
        const indice = this.props.indice;
        this.props.apagarCategoria(indice);
    }
    render() {
        return (
            <div className="categorias_excluir">
                <button className="categorias_button">
                    <img className="categoria_button_img" src={fechar} alt="fechar"
                        onClick={this.deletar.bind(this)} />
                </button>
                <li className="categorias_categoria" key={this.props.indice}>{this.props.categoria}</li>
            </div>
        );
    }

}
export default Categoria;