import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import Cabecalho from "./components/Cabecalho";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Rodape from "./components/Rodape";
class App extends Component {
  constructor(){
    super();
    
    this.state = {
      notas:[],
      categorias:[],
    }
  }

  criarNota(title, text,categoria){
    const novaNota = {title, text, categoria};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  adcionarCategoria(categoria){
    const novoArrayCategorias = [...this.state.categorias,categoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado)
  }

  deletarNota(index){
    let notas = this.state.notas;
    notas.splice(index,1);
    this.setState({notas:notas});
  }

  render() {
    return (
      <section className="corpo">
        <Cabecalho/>
        <section className="conteudo">
          <FormularioCadastro categorias={this.state.categorias}
            criarNota={this.criarNota.bind(this)} 
          />
          <main className="conteudo-principal">
            <ListaDeCategorias 
              categorias={this.state.categorias} 
              adcionarCategoria={this.adcionarCategoria.bind(this)}
            />
            <ListaDeNotas
              notas={this.state.notas} 
              apagarNota={this.deletarNota.bind(this)}
            />
          </main>
          
        </section>
        <Rodape/>
      </section>
    );
  }
}

export default App;
