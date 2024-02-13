const AuthenticationController = require("./controllers/AuthenticationController");

module.exports = (app) => {
    app.get("/status", (req, res) => {
        res.send({
            message: "Status 👍🏻",
        });
    });
    app.get("/register", (req, res) => {
        res.send({
            message: "register GET working",
        });
    });
    app.post("/register", AuthenticationController.register);
};
