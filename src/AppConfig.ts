import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as morgan from 'morgan';

import { Routes } from './routes/Routes';

class AppConfig {
    public app: express.Application;
    private router: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(helmet());
        this.app.use(bodyParser.urlencoded({
            extended: false,
        }));
        this.app.use(cors());
        this.app.use(morgan('tiny'));
        // Healthcheck to check your application
        this.app.use('/healthcheck', require('express-healthcheck')());
    }
}

export default new AppConfig().app;
