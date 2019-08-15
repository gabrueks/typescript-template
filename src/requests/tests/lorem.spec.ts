import 'mocha';
import { expect } from 'chai';
import { AxiosResponse } from 'axios';

import { LoremRequest } from '..';
import testsUrl from './testsUrl';

const loremRequests: LoremRequest = new LoremRequest();

describe('Requester', () => {
    it('Should return JSON data on get', async () => {
        const result: AxiosResponse = await loremRequests.getLoremIpsum(testsUrl.getURL);
        expect(result).to.be.an('object');
        expect(result.status).to.equal(200);
        expect(result).to.have.property('status');
        expect(result).to.have.property('data');
    });

    it('Should return JSON data on post', async () => {
        const result: AxiosResponse = await loremRequests.postLoremIpsum(testsUrl.postURL);
        expect(result).to.be.an('object');
        expect(result.status).to.equal(200);
        expect(result).to.have.property('status');
        expect(result).to.have.property('data');
    });
});
