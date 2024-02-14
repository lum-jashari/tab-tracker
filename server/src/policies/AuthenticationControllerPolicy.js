const Joi = require("joi");

module.exports = {
    register: (req, res, next) => {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$")),
        });

        const validation = schema.validate(req.body);
        if (validation.error) {
            switch (validation.error.details[0].context.key) {
                case "email":
                    res.status(400).send({
                        error: "input valid email",
                    });
                    break;
                case "password":
                    res.status(400).send({
                        error: `
                                      The password must contain only the following characters:
                                      <br>
                                      1. Upper-case letters, lower-case letters and numerics
                                      <br>
                                      2. It must be at least 8chars  and less that 32chars long
                                `,
                    });
                    break;
                default:
                    res.status(400).send({
                        error: "invalid registration info",
                    });
            }
        } else {
            next();
        }
    },
};
