import {Document} from "mongoose";

/**
 * @summary Classe abstrata para a criação das models
 * @type titulo {String} titulo
 * @type texto {String} texto ou descrição
 * @type imagem {String} imagem default ou avatar
 * @type dataPublicacao {Date} data de publicação
 * @type tags {String} tags relacionada a model
 * @type link {String} link do documento ex: http://conteudo.com.br
 * @type ativo {String} status
 * */
export abstract class Core extends Document{
    titulo: String;
    texto: String;
    imagem: String;
    dataPublicacao: Date;
    tags: String;
    link: String;
    ativo: String;
}