const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");
const { sequelize } = require("./models");

const app = express();

app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());

require("./passport");

require("./routes")(app);

sequelize.sync({ force: false }).then(() => {
    app.listen(config.port);
    console.log(`server started @ ${config.port}`);
});
