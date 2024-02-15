const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK,
    });
}

module.exports = {
    async register(req, res) {
        try {
            console.log("HERE-HERE-HERE-HERE-HERE-HERE");
            const user = await User.create(req.body);
            const userJSON = user.toJSON();
            console.log(userJSON);
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON),
            });
        } catch (err) {
            console.log(err);
            res.status(400).send({
                error: "this email account is already in use",
            });
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                where: {
                    email: email,
                },
            });
            if (!user) {
                return res.status(403).send({
                    error: "no user",
                });
            }
            const isPasswordValid = await user.comparePassword(password);
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: "invalid password",
                });
            }
            const userJSON = user.toJSON();
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON),
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "an error has occurred",
            });
        }
    },
};
