module.exports = (sequelize, Sequelize) => {

  const Libro = sequelize.define("libro", {
    
    autor: {
      type: Sequelize.STRING
    },
    titulo: {
      type: Sequelize.STRING
    },
    anio: {
      type: Sequelize.STRING
    }
  });

  return Libro;
};
