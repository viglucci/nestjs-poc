const defer = require("config/defer").deferConfig;

const config = {
    host: process.env.NESTPOC_HOST, // example: 'https://subdomain.ngrok.io'
    auth: {
        passport: {
            battlenet: {
                clientID: process.env.NESTPOC_AUTH_BATTLENET_ID,
                clientSecret: process.env.NESTPOC_AUTH_BATTLENET_SECRET,
                callbackURL: defer(function() {
                    return `${this.host}/oauth/battlenet/callback`
                }),
                region: process.env.NESTPOC_AUTH_BATTLENET_REGION,
            }
        }
    }
};

module.exports = config;
