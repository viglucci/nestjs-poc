import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./modules/app.module";
import * as express from "express";

function appFactory () {
    const app = express();
    app.set("view engine", "pug");
    app.set("views", `${__dirname}/views`);
    return app;
}

async function bootstrap() {
    const server = await NestFactory.create(ApplicationModule, appFactory());
    await server.listen(3000);
}

bootstrap();
