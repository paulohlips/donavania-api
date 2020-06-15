module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "SET NULL",
        onDelete: "SET NULL",
        allowNull: false,
      },
      hora_retirada: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hora_entrega: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      valor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
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
    return queryInterface.dropTable("orders");
  },
};
