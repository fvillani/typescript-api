import {Core} from "./core";
import {Fotos} from "./fotos";

/**
 * @summary Model de galeria de fotos
 * @type fotos {Array} lista de model de fotos
 * */
export class Galeria extends Core {
    fotos: Array<Fotos>;
}