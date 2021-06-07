import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      texto: "",
      categoria: "Sem Categoria",
    };
  }
  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.setState({ title: event.target.value });
  }
  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.setState({ texto: event.target.value });
  }

  _handleMudancaCategoria(event){
    event.stopPropagation();
    this.setState({categoria: event.target.value});
  }
  _criarNota(event) {
    if (this.state.title.length == 0) {
      this.state.title = "Sem titulo";
    }
    if (this.state.texto.length == 0) {
      this.state.texto =
        "Não sei por que você faria isso mas criou uma notação vazia :/";
    }
    event.stopPropagation();
    event.preventDefault();
    this.props.criarNota(this.state.title, this.state.texto,this.state.categoria);
    this.setState({ title: "", texto: "" });
  }
  render() {
    return (
      <form className="form-cadastro " onSubmit={this._criarNota.bind(this)}>
        <select 
          className="form-cadastro_input" 
          name="Categoria"
          onChange={this._handleMudancaCategoria.bind(this)}
          >
          <option>Sem categoria</option>
          {this.props.categorias.map((categoria) => {
            return <option>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
          value={this.state.title}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
          value={this.state.texto}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
