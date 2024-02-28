const { Bookmark, Song, User } = require("../models");
const _ = require("lodash");

module.exports = {
    async index(req, res) {
        try {
            const userId = req.user.id;
            const { songId } = req.query;
            const where = {
                UserId: userId,
            };
            if (songId) {
                where.SongId = songId;
            }
            console.log(where);
            console.log(where);
            console.log(where);
            const bookmarks = await Bookmark.findAll({
                where: where,
                include: [
                    {
                        model: Song,
                    },
                ],
            });
            res.send(bookmarks);
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
