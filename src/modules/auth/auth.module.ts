import * as passport from "passport";
import {
    Module,
    NestModule,
    MiddlewaresConsumer,
    RequestMethod,
} from "@nestjs/common";
import { BattlenetStrategy } from "./passport/strategy/battlenet.strategy";
import { AuthController } from "./auth.controller";
import { PassportInitializationMiddleware } from "../../middleware/PassportInitialization.middleware";
import { SessionInitializationMiddleware } from "../../middleware/SessionInitialization.middleware";
import { PassportSessionInitializationMiddleware } from "../../middleware/PassportSessionInitialization.middleware";
import { CookieParserMiddleware } from "../../middleware/CookieParser.middleware";

@Module({
    components: [BattlenetStrategy],
    controllers: [AuthController],
})
export class AuthModule implements NestModule {

    public configure(consumer: MiddlewaresConsumer) {
        consumer.apply(CookieParserMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL });
        consumer.apply(SessionInitializationMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL });
        consumer.apply(PassportInitializationMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL });
        consumer.apply(PassportSessionInitializationMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL });
    }
}
