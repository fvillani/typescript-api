import {IService} from "./iService";
import {Galeria} from "../models/galeria";

/**
 * @summary Contrato implementa a Interface IService passando a model de Galeria
 * */
export interface IGaleriaService extends IService<Galeria>{}