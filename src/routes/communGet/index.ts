import { ResponseService } from '../../services';

export default {
    serviceName: new ResponseService(),
    serviceMethod: 'postResponse',
    middlewares: [],
    URL: '/post',
    httpMethod: 'get',
};
