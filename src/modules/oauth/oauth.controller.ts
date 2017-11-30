import { Get, Controller, Req, Res, Next } from "@nestjs/common";
import * as passport from "passport";

@Controller()
export class OAuthController {

    @Get("/oauth/battlenet/callback")
    getBattlenetCallback(@Req() req, @Res() res, @Next() next) {
        passport.authenticate("bnet", { failureRedirect: "/" }, (err, user) => {
            req.session.user = user;
            req.user = user;
            res.redirect("/");
        }).call(passport, req, res, next);
    }
}
