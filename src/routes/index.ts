import { Application } from 'express';
import { readdirSync } from 'fs';


export class MainRoutes {

    constructor() {}

    public registerRoutes(app: Application): void {
        const routes = this.getRoutesFromDirectories();

        routes.forEach(async route => {
            const routeDetails = await import(`./${route}`);
            const filteredRoute = routeDetails[Object.keys(routeDetails)[0]];

            app.route(filteredRoute.URL)
                [`${filteredRoute.httpMethod}`]([
                    filteredRoute.serviceName[`${filteredRoute.serviceMethod}`],
                    ...filteredRoute.middlewares,
                ]);
        });
    }

    private getRoutesFromDirectories = () =>
        this.getFiles().filter(fileOrDirectory => !fileOrDirectory.includes('.'));

    private getFiles = () => readdirSync(__dirname);
}
