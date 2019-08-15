import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import errorHandler from './errorHandler';

export default class Request {
    constructor() {}

    public getRequest = async (
        URL: string,
        options: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
        try {
            return axios.get(URL, options);
        } catch (err) {
            errorHandler(err, this.getRequest.name);
        }
    }

    public postRequest = async (
        URL: string,
        data?: {},
        options: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
        try {
            return axios.post(URL, data, options);
        } catch (err) {
            errorHandler(err, this.postRequest.name);
        }
    }
}
