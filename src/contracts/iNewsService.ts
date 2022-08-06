import {IService} from "./iService";
import {News} from "../models/news";

/**
 * @summary Contrato implementa a Interface IService passando a model de News
 * */
export interface INewsService extends IService<News> {}