export default class ArraydeNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }
    inscrever(func) {
        this.inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => func(this.categorias));
    }

    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo,texto,categoria);
        this.notas.push(novaNota);
    }
    deletarNota(index){
        this.notas.slice(index,1); 
    }
}

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}