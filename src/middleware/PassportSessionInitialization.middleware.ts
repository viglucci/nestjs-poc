import { Middleware, NestMiddleware, ExpressMiddleware } from "@nestjs/common";
import * as passport from "passport";
import * as session from "express-session";

@Middleware()
export class PassportSessionInitializationMiddleware implements NestMiddleware {

    resolve(...args: any[]): ExpressMiddleware {
        console.log("PassportSessionInitializationMiddleware initialized");
        return passport.session();
    }
}
