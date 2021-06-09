import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import Cabecalho from "./components/Cabecalho";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Rodape from "./components/Rodape";
import Categorias from "./dados/Categorias";
import ArraydeNotas from "./dados/Notas";
class App extends Component {
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArraydeNotas();
  }
  render() {
    return (
      <section className="corpo">
        <Cabecalho/>
        <section className="conteudo">
          <FormularioCadastro categorias={this.categorias}
            criarNota={this.notas.adicionarNota} 
          />
          <main className="conteudo-principal">
            <ListaDeCategorias 
              categorias={this.categorias} 
              adcionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
              deletarCategoria={this.categorias.deletarCategoria.bind(this.categorias)}
            />
            <ListaDeNotas
              notas={this.notas.notas} 
              apagarNota={this.notas.deletarNota}
            />
          </main>
          
        </section>
        <Rodape/>
      </section>
    );
  }
}

export default App;
