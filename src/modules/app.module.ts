import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AuthModule } from "./auth/auth.module";
import { OAuthModule } from "./oauth/oauth.module";
import { RequestLoggerMiddleware } from "../middleware/RequestLogger.middleware";
import * as passport from "passport";

@Module({
    modules: [AuthModule, OAuthModule],
    controllers: [AppController],
    components: [],
})
export class ApplicationModule implements NestModule {

    public configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(RequestLoggerMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL });
    }
}
