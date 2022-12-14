/* Import des modules necessaires */
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ encoding: "latin1" });

/* Connection BDD mongoose */
mongoose
    .connect(process.env.DBCONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    // Demarrage serveur
    .then(() =>
        app.listen(process.env.SERVER_PORT, () => {
            console.log(
                `Le serveur est lancé sur le port ${process.env.SERVER_PORT} !`
            );
        })
    )
    // Arret du serveur si connection impossible
    .catch((error) => console.log(error));

