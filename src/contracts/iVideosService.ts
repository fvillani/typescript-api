import {IService} from "./iService";
import {Videos} from "../models/videos";

/**
 * @summary Contrato implementa a Interface IService passando a model de Videos
 * */
export interface IVideosService extends IService<Videos>{}