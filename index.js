const express = require("express");
const app = express();
const path = require("path")
const colors = require("colors");
const conec = require("./conec");

// Configuracion del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));


// Rutas

app.get("/", (req, res) => {
    res.render('iniciosesion')
    console.log("Entrando a inicio de sesion".green);
});

let infoUser;

app.post("/validando", (req, res) => {
    let { nombre, contraseña } = req.body;
    console.log(nombre, contraseña);
    conec.query('SELECT *, DATE_FORMAT(fechanacimiento, "%d/%m/%Y") as fechanacimiento FROM users WHERE 1nombre = ? AND nidentificacion = ? ', [nombre, contraseña], (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error");
        } else {
            if (result.length > 0) {
                console.log(result[0]['fechanacimiento']);
                console.table(result[0])
                infoUser = result[0];
                res.redirect("/welcome");
            } else {
                res.redirect("/");
            }
        }
    });
});

app.get("/welcome", (req, res) => {
    res.render('welcome');
    console.log("Entrando a bienvenida".yellow);
});

app.get("/info-user", (req, res) => {
    res.render('info-user', { infoUser: infoUser })
    console.log("Entrando a info-user".red);
});

// Ejecucion server

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});