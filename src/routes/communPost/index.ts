import { ResponseService } from '../../services';
import GuardMiddleware from '../../middlewares/GuardMiddleware';

export default {
    serviceName: new ResponseService(),
    serviceMethod: 'postResponse',
    middlewares: [new GuardMiddleware().checkSession],
    URL: '/post',
    httpMethod: 'post',
};
