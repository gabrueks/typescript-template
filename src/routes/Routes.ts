import * as express from 'express';

import { ResponseService } from '../services';
import { Guard } from '../middlewares';

export class Routes {
    private mainURL: string = '/';
    private postURL: string = '/post';

    private responseService: ResponseService = new ResponseService();
    private guardMiddleware: Guard = new Guard();

    constructor() {}

    public routes(app: express.Application): void {
        // Example on authenticated route
        app.route(this.mainURL)
            .get(this.guardMiddleware.checkSession, this.responseService.getResponse);

        app.route(this.postURL)
            .post(this.responseService.postResponse);
    }
}
