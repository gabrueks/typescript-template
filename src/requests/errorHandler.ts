import { AxiosError } from 'axios';

export default (err: AxiosError, funcName: string): void => {
    if (err.response) {
        console.error(
            `Response error on ${funcName}. The request was made and the server responded.`,
        );
        console.error('Response data error: ');
        console.error(err.response.data);
        console.error(`Response status error: ${err.response.status}`);
        console.error('Response headers error: ');
        console.error(err.response.headers);
    } else if (err.request) {
        console.error(
            `Response error on ${funcName}. The request returned but no response received.`,
        );
        console.error('Response request error: ');
        console.error(err.request);
    } else {
        console.error(`Error not identified on ${funcName}.`);
        console.error('Generic error: ');
        console.error(err.message);
    }
};
