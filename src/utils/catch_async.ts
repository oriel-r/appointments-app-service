import { NextFunction, Request, Response } from "express";
type async_fn = (req: Request, res:Response) => Promise<any>;

const catch_async = (fn: async_fn) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res).catch((err: any) => next(err));
    };
};

export default catch_async;