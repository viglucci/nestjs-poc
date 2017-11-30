import { Get, Controller, Req, Res, Next } from "@nestjs/common";
import * as config from "config";

@Controller()
export class AppController {

    @Get()
    getIndex(@Req() req, @Res() res, @Next() next) {
        let model = {
            user: null,
            loginUrl: `${config.get("host")}/auth/login/battlenet`,
            logoutUrl: `${config.get("host")}/auth/logout`,
        };
        if (req.session && req.session.user) {
            model.user = req.session.user;
        }
        res.render("index", model);
    }
}
