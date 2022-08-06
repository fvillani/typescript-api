import {Core} from "./core";

/**
 * @summary Model de news
 * @type chapeu {String} titulo menor
 * @type autor {String} quem escreveu a noticia
 * */
export class News extends Core {
    chapeu: String;
    autor: String;
}