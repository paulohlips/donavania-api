module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("menus", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      acompanhamentos: {
        type: Array(Sequelize.STRING),
        allowNull: false,
      },
      carnes: {
        type: Array(Sequelize.STRING),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("menus");
  },
};
