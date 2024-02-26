const { Song } = require("../models");

module.exports = {
    async index(req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10,
            });
            res.send(songs);
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "error while fetching song",
            });
        }
    },
    async show(req, res) {
        try {
            const song = await Song.findByPk(req.params.songId);
            res.send(song);
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "error while fetching song",
            });
        }
    },
    async post(req, res) {
        try {
            const song = await Song.create(req.body);
            res.send(song);
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "error while creating song",
            });
        }
    },
};
