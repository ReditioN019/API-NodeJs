const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

//Permite recibir formatos json y entenderlos
app.use(express.json());  
//se entiende los datos que llegan del formulario (inputs. NO imgs)
app.use(express.urlencoded({ extended: true }));  


const db = require("./app/models");
db.sequelize.sync();

//RUTAS
app.get("/", (req, res) => {
  res.json({ message: "Bienvenid@s a la aplicacioón de taller 5." });
});

require("./app/routes/libro.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`El server está corriendo en el puerto: ${PORT}.`);
});
