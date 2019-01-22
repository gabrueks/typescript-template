import * as express from 'express';

import { ResponseService } from '../services/ResponseService';

export class Routes {
    private mainURL: string = '/';
    private postURL: string = '/post';

    private responseService: ResponseService = new ResponseService();

    constructor() {}

    public routes(app: express.Application): void {
        app.route(this.mainURL)
            .get(async (req: express.Request, res: express.Response) => {
                res.status(200).json(await this.responseService.getResponse());
            });

        app.route(this.postURL)
            .post(async (req: express.Request, res: express.Response) => {
                console.log(req.body);
                res.status(200).json(await this.responseService.postResponse());
            });
    }
}