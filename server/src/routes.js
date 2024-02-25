const AuthenticationController = require("./controllers/AuthenticationController");

const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");

module.exports = (app) => {
    app.get("/status", (req, res) => {
        res.send({
            message: "Status 👍🏻",
        });
    });
    app.post(
        "/register",
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    );
    app.post("/login", AuthenticationController.login);
};
