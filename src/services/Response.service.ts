import { Request, Response } from 'express';

export default class ResponseService {
    constructor() {}

    public getResponse = async (req: Request, res: Response) => {
        let data: Object;
        if (req.body) data = req.body;
        const response: Object = { hi: 'there' };
        res.status(200).json(response);
    }

    public postResponse = async (req: Request, res: Response) => {
        let data: Object;
        if (req.body) data = req.body;
        const response: Object = { hi: 'thoro' };
        res.status(200).json(response);
    }
}
