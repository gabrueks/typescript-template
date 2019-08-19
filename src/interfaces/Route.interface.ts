export interface IRoute {
    serviceName: Object,
    middlewares: Array<Object>,
    URL: string,
    httpMethod: string,
    authenticated: boolean,
}
