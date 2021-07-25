const db = require("../models");
const Libro = db.libros;
const Op = db.Sequelize.Op;

// CREA Y GUARDA UN NUEVO LIBRO
exports.create = (req, res) => {
  
  // Validar la solicitud
  if (!req.body.autor || !req.body.titulo) { //si el contenido de autor esta vacio, envia un mensaje 
    res.status(400).send({
      message: "El contenido NO puede estar vacío!"
    });
    return;
  }

  ////Crea un libro
  const libro = {
    autor: req.body.autor,
    titulo: req.body.titulo,
    anio: req.body.anio
  };

  // Guarda el libro en la BD
  Libro.create(libro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al registrar el libro."
      });
    });
};

// OBTIENE TODOS LOS TUTORIALES DE LA BD
exports.findAll = (req, res) => {

  Libro.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al recuperar los tutoriales."
      });
    });
};


// Actualizar un libro por el id en la solicitud
exports.update = (req, res) => {
  const id = req.params.id;

  Libro.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "El libro se actualizo correctamente."
        });
      } else {
        res.send({
          message: `No se puede actualizar el libro con id=${id}. Quizás no se encontró el tutorial o el cuerpo requerido está vacío!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar el libro con id=" + id
      });
    });
};

// Eliminar un tutorial con la id entregada en la solicitud
exports.delete = (req, res) => {
  const id = req.params.id;

  Libro.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "El libro se elimino correctamente!"
        });
      } else {
        res.send({
          message: `No se puede borrar el libro con id=${id}. Tal vez ese libro con existe!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "NO se pudo eliminar el libro con id=" + id
      });
    });
};

