export class Noticia {
    _titulo
    _subtitulo
    _imagem
    _id
    constructor(titulo, subtitulo, imagem, id) {
        this._titulo = titulo
        this._subtitulo = subtitulo
        this._imagem = imagem
        this._id = id + 1
    }
    get titulo() {
        return this._titulo
    }
    get subtitulo() {
        return this._subtitulo
    }
    get imagem() {
        return this._imagem
    }
    get id() {
        return this._id
    }
}