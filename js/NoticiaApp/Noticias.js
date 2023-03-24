export class Noticias {
    _noticias
    _noticia
    constructor(noticia) {
        this._noticias = []
        this._noticia = noticia
    }
    adiciona(noticia) {
        this._noticias.push(noticia)
    }
    lista() {
        return this._noticias
    }
}