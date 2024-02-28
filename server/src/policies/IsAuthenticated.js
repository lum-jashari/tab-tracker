const passport = require("passport");

module.exports = function (req, res, next) {
    passport.authenticate("jwt", function (error, user) {
        if (error || !user) {
            res.status(403).send({
                error: "you do not access to this",
            });
        } else {
            req.user = user;
            next();
        }
    })(req, res, next);
};
