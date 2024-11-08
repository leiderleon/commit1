const express = require("express");
const app = express();
const path = require("path")
const colors = require("colors");

// Configuracion del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));


// Rutas

app.get("/iniciosesion", (req, res) => {
    res.render('iniciosesion')
    console.log("Entrando a inicio de sesion".green);
});

app.get("/welcome", (req, res) => {
    res.render('welcome')
    console.log("Entrando a bienvenida".yellow);
});

app.get("/info-user", (req, res) => {
    res.render('info-user')
    console.log("Entrando a info-user".red);
});

// Ejecucion server

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});