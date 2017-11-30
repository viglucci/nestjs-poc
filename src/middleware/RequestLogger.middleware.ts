import { Middleware, NestMiddleware, ExpressMiddleware } from "@nestjs/common";
import * as morgan from "morgan";

@Middleware()
export class RequestLoggerMiddleware implements NestMiddleware {

    resolve(...args: any[]): ExpressMiddleware {
        console.log("RequestLoggerMiddleware initialized");
        return morgan("common");
    }
}
