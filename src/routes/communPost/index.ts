import { ResponseService } from '../../services';

export default {
    serviceName: new ResponseService(),
    middlewares: [],
    URL: '/post',
    httpMethod: 'post',
    // authenticated: true,
};
