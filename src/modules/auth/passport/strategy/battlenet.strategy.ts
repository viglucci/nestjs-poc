import * as passport from "passport";
import { Strategy } from "passport-bnet";
import { Component, Inject } from "@nestjs/common";
import * as config from "config";

@Component()
export class BattlenetStrategy extends Strategy {

    constructor() {
        super({
            clientID: config.get("auth.passport.battlenet.clientID"),
            clientSecret: config.get("auth.passport.battlenet.clientSecret"),
            callbackURL: config.get("auth.passport.battlenet.callbackURL"),
            region: config.get("auth.passport.battlenet.region")
        }, (accessToken, refreshToken, profile, done) => {
            done(null, profile);
        });

        passport.use(this);
    }
}
