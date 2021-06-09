export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this.inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => func(this.categorias));
    }

    
    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
    }

    deletarCategoria(index) {
        this.categorias.splice(index, 1);
    }


}