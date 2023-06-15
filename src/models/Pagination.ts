import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';
import { IData, IPhoto, ITodo } from '../interfaces/index.js';

export class Pagination {
  // Higher order function that takes a model as parameters and returns an anonymous funciton
  // which is a middleware function that handles pagination,
  // a way of presenting large dataset into more manageable chunks.
  static paginateData(
    model: Model<IPhoto | ITodo>
  ): (req: Request, res: Response, next: NextFunction) => Promise<void> {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const page = parseInt(
          typeof req.query.page === 'string' ? req.query.page : '1'
        );
        const limit = parseInt(
          typeof req.query.limit === 'string' ? req.query.limit : '10'
        );
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const r = await model.find();
        const data: IPhoto[] | ITodo[] = await model
          .find({}, { _id: 0, __v: 0 })
          .limit(limit)
          .skip(startIndex);

        const nextPage = {
          page: 0,
          limit: 0,
        };
        const prevPage = {
          page: 0,
          limit: 0,
        };
        const documentsCount = await model.countDocuments();

        if (documentsCount > endIndex) {
          nextPage.page = page + 1;
          nextPage.limit = limit;
        }
        if (startIndex > 0) {
          prevPage.page = page - 1;
          prevPage.limit = limit;
        }

        const result: IData = {
          data,
          next: nextPage,
          prev: prevPage,
        };

        res.locals.data = result;
        next();
      } catch (error: any) {
        res.status(500).send({ message: error.message });
      }
    };
  }
}
