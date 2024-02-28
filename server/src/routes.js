const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const SongsController = require("./controllers/SongsController");
const BookmarkController = require("./controllers/BookmarkController");
const HistoriesController = require("./controllers/HistoriesController");
const isAuthenticated = require("./policies/IsAuthenticated");

module.exports = (app) => {
    app.get("/status", (res) => {
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

    app.get("/bookmarks", isAuthenticated, BookmarkController.index);
    app.post("/bookmarks", isAuthenticated, BookmarkController.post);
    app.delete(
        "/bookmarks/:bookmarkId",
        isAuthenticated,
        BookmarkController.delete
    );

    app.get("/histories", HistoriesController.index);
    app.post("/histories", HistoriesController.post);
};
