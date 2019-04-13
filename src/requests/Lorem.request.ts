import axios, { AxiosRequestConfig } from 'axios';

import errorHandler from './errorHandler';

export default class Lorem {
    constructor() {}

    public getLoremIpsum = async (URL: string, options: AxiosRequestConfig = {}) => {
        try {
            return await axios.get(URL, options);
        } catch (err) {
            errorHandler(err, this.getLoremIpsum.name);
            return {};
        }
    }

    public postLoremIpsum = async (URL: string, data?: {}, options: AxiosRequestConfig = {}) => {
        try {
            return await axios.post(URL, data, options);
        } catch (err) {
            errorHandler(err, this.postLoremIpsum.name);
            return {};
        }
    }
}