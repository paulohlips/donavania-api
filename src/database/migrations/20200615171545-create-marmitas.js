module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("marmitas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      volume: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      preco: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("marmitas");
  },
};
