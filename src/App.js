import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import Cabecalho from "./components/Cabecalho";
import "./assets/App.css";
import './assets/index.css';
import Rodape from "./components/Rodape";
class App extends Component {
  constructor(){
    super();
    
    this.state = {
      notas:[]
    }
  }

  criarNota(title, text){
    const novaNota = {title, text};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }
  render() {
    return (
      <section className="corpo">
        <Cabecalho/>
        <section className="conteudo">
          <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
          <ListaDeNotas notas={this.state.notas}/>
        </section>
        <Rodape/>
      </section>
    );
  }
}

export default App;
