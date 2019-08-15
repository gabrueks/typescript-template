import 'mocha';
import { expect } from 'chai';
import { AxiosResponse } from 'axios';

import { Request } from '../';
import testsUrl from './testsUrl';

const request: Request = new Request();

describe('Requester', () => {
    it('Should return JSON data on get', async () => {
        const result: AxiosResponse = await request.getRequest(testsUrl.getURL);
        expect(result).to.be.an('object');
        expect(result.status).to.equal(200);
        expect(result).to.have.property('status');
        expect(result).to.have.property('data');
    });

    it('Should return JSON data on post', async () => {
        const result: AxiosResponse = await request.postRequest(testsUrl.postURL);
        expect(result).to.be.an('object');
        expect(result.status).to.equal(200);
        expect(result).to.have.property('status');
        expect(result).to.have.property('data');
    });
});
