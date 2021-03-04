// estudo sobre get e set em javascript


const sequencia = {
    _valor: 1,
    get valor() {
        return this.valor++
    },
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}