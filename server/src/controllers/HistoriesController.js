const { History, Song, User } = require("../models");
const _ = require("lodash");

module.exports = {
    async index(req, res) {
        try {
            const { userId } = req.query;
            const where = {
                UserId: userId,
            };

            const histories = await History.findAll({
                where: where,
                include: [
                    {
                        model: Song,
                    },
                ],
            });
            res.send(_.uniqBy(histories, (history) => history.SongId));
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "error while fetching history",
            });
        }
    },
    async post(req, res) {
        try {
            const { songId, userId } = req.body;

            const histories = await History.create({
                SongId: songId,
                UserId: userId,
            });
            res.send(histories);
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "error while creating history",
            });
        }
    },
};
