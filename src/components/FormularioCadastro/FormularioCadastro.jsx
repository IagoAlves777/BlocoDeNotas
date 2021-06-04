import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.title = "";
    this.texto = "";
  }
  _handleMudancaTitulo(event){
    event.stopPropagation();
    this.title = event.target.value;
  }
  _handleMudancaTexto(event){
    event.stopPropagation();
    this.texto = event.target.value;
  }
  _criarNota(event){
    if(this.title.length == 0){
      this.title = "Sem titulo";
    }
    if(this.texto.length == 0){
      this.texto = "Não sei por que você faria isso mas criou uma notação vazia :/" 
    }
    event.stopPropagation();
    event.preventDefault();
    this.props.criarNota(this.title, this.texto);
  }
  render() {
    return (
      <form className="form-cadastro "
        onSubmit ={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
