module.exports = {
    register(req, res) {
        console.log(req.body);
        res.send({
            message: `Hello ${req.body.email}! Your user was registered! Have fun!`,
        });
    },
};
