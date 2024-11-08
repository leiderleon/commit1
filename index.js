const express = require("express");
const app = express();
const path = require("path")

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "iniciosesion.html"));
});

app.get("/welcome", (req, res) => {
    res.sendFile(path.join(__dirname, "welcome.html"));
});

app.get("/info-user", (req, res) => {
    res.sendFile(path.join(__dirname, "info-user.html"));
});

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});