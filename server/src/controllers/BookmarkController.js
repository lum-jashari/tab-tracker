const { Bookmark } = require("../models");

module.exports = {
    async index(req, res) {
        try {
            const { songId, userId } = req.query;

            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId,
                },
            });
            res.send(bookmark);
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "error while fetching bookmark",
            });
        }
    },
    async post(req, res) {
        try {
            const { songId, userId } = req.body.params;
            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId,
                },
            });
            if (bookmark) {
                return res.status(400).send({
                    error: "this is already bookmarked",
                });
            }
            const newBookmark = await Bookmark.create(req.body);
            res.send(newBookmark);
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "error while bookmarking",
            });
        }
    },
    async delete(req, res) {
        try {
            const { bookmarkId } = req.params;
            const bookmark = await Bookmark.findByPk(bookmarkId);
            await bookmark.destroy();

            res.send(bookmark);
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "error while unBookmarking song",
            });
        }
    },
};
