import * as express from 'express';

import { ResponseService } from '../services';
import { Guard } from '../middlewares';
import { mainRoutes } from './routesURL';

export class MainRoutes {
    private responseService: ResponseService = new ResponseService();
    private guardMiddleware: Guard = new Guard();

    constructor() {}

    public routes(app: express.Application): void {
        // Example on authenticated route
        app.route(mainRoutes.mainURL)
            .get(this.guardMiddleware.checkSession, this.responseService.getResponse);

        app.route(mainRoutes.postURL)
            .post(this.responseService.postResponse);
    }
}
