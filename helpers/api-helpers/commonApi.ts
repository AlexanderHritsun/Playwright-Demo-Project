const _ = require('lodash');
const frisby = require('frisby');
require('dotenv').config();

export default class CommonApi {
    async sendAuthorizedRequest(url: string, method: string, body?: object, token?: string) {
        const authToken = _.isUndefined(token) ? process.env.TOKEN : token;

        return frisby
            .setup({
                request: {
                    headers: {
                        Authorization: 'Bearer ' + authToken,
                        'Content-Type': 'application/json'
                    }
                }
            })
            .fetch(url, {
                method: method,
                body: JSON.stringify(body)
            });
    }
}