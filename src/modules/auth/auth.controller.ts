import { Get, Controller, Req, Res, Next } from "@nestjs/common";
import * as passport from "passport";

@Controller()
export class AuthController {

    @Get("/auth/login/battlenet")
    getLogin(@Req() req, @Res() res, @Next() next) {
        passport.authenticate("bnet")(req, res, next);
    }

    @Get("/auth/logout")
    getLogout(@Req() req, @Res() res, @Next() next) {
        req.logout();
        req.session.destroy();
        res.redirect("/");
    }
}
