const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const SongsController = require("./controllers/SongsController");
const BookmarkController = require("./controllers/BookmarkController");

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

    app.get("/songs", SongsController.index);
    app.get("/songs/:songId", SongsController.show);
    app.put("/songs/:songId", SongsController.put);
    app.post("/songs", SongsController.post);

    app.get("/bookmarks", BookmarkController.index);
    app.post("/bookmarks", BookmarkController.post);
    app.delete("/bookmarks/:bookmarkId", BookmarkController.delete);
};
