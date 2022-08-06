import {INewsService} from "../contracts/iNewsService";
import {NewsRepository} from "../repository/newsRepository";
import {Result} from "../infra/result";
import {News} from "../models/news";

export class NewsService implements INewsService
{
    async get(id: string): Promise<News> {
        let result = await NewsRepository.findById(id);
        return result;
    }

    async getAll(page: number, qtd: number): Promise<Result<News>> {
        let result = new Result<News>();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await NewsRepository.count({});
        result.Data = await NewsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return result;
    }

}