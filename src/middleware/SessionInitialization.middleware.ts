import { Middleware, NestMiddleware, ExpressMiddleware } from "@nestjs/common";
import * as passport from "passport";
import * as session from "express-session";

@Middleware()
export class SessionInitializationMiddleware implements NestMiddleware {

    resolve(...args: any[]): ExpressMiddleware {
        console.log("SessionInitializationMiddleware initialized");
        return session({
            secret: "12345",
            saveUninitialized: false,
            resave: true
        });
    }
}
