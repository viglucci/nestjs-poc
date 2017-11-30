import { Middleware, NestMiddleware, ExpressMiddleware } from "@nestjs/common";
import * as passport from "passport";

@Middleware()
export class PassportInitializationMiddleware implements NestMiddleware {

    resolve(...args: any[]): ExpressMiddleware {
        console.log("PassportInitializationMiddleware initialized");
        return passport.initialize();
    }
}
