import { Middleware, NestMiddleware, ExpressMiddleware } from "@nestjs/common";
import * as cookieParser from "cookie-parser";

@Middleware()
export class CookieParserMiddleware implements NestMiddleware {

    resolve(...args: any[]): ExpressMiddleware {
        console.log("CookieParserMiddleware initialized");
        return cookieParser();
    }
}
