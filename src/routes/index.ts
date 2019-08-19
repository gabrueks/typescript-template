import { Application } from 'express';
import { readdirSync } from 'fs';

import { Guard } from '../middlewares'
import { IRoute } from '../interfaces/Route.interface'
export class MainRoutes {
    private guardMiddleware: Guard = new Guard();

    constructor() {}

    public registerRoutes(app: Application): void {
        const routes = this.getRoutesFromDirectories();

        routes.forEach(async route => {
            const routeDetails = await import(`./${route}`);
            const filteredRoute: IRoute = routeDetails[Object.keys(routeDetails)[0]];

            app.route(filteredRoute.URL)
                [`${filteredRoute.httpMethod}`]([
                    ...filteredRoute.middlewares,
                    filteredRoute.authenticated ? this.guardMiddleware.checkSession : [],
                    filteredRoute.serviceName['runController'],
                ]);
        });
    }

    private getRoutesFromDirectories = () =>
        this.getFiles().filter(fileOrDirectory => !fileOrDirectory.includes('.'));

    private getFiles = () => readdirSync(__dirname);
}
