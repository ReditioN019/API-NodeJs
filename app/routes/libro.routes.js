
module.exports = app => {

  const libros = require("../controllers/libro.controller.js");
  var router = require("express").Router();


  router.post("/", libros.create);
  router.get("/", libros.findAll);
  router.put("/:id", libros.update);
  router.delete("/:id", libros.delete);

  app.use("/api/libros", router);
};
