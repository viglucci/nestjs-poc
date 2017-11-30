import * as passport from "passport";
import {
    Module,
    NestModule,
    MiddlewaresConsumer,
    RequestMethod,
} from "@nestjs/common";
import { OAuthController } from "./oauth.controller";

@Module({
    components: [],
    controllers: [OAuthController],
})
export class OAuthModule implements NestModule {

    public configure(consumer: MiddlewaresConsumer) {

        passport.serializeUser(function (user, done) {
            console.log("Serializing user");
            done(null, user);
        });

        passport.deserializeUser(function (obj, done) {
            console.log("Deserializing user");
            done(null, obj);
        });
    }
}
