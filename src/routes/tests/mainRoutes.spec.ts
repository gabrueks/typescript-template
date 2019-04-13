import 'mocha';
import * as request from 'supertest';

import { mainRoutes } from '../routesURL';
import AppConfig from '../../AppConfig'

describe('Test main routes', () => {
    it(`Should return JSON data on get on "${mainRoutes.mainURL}"`, (done) => {
        request(AppConfig)
            .get(mainRoutes.mainURL)
            .set('Accept', 'application/json')
            .set('session', 'true')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
    });

    it(`Should return JSON data on post on "${mainRoutes.postURL}"`, (done) => {
        request(AppConfig)
            .post(mainRoutes.postURL)
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
    });
});
