import Sequelize, { Model } from "sequelize";

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        valor: Sequelize.STRING,
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        phone: Sequelize.STRING,
        hora_entrega: Sequelize.STRING,
        hora_retirada: Sequelize.STRING,
        valor: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

export default Order;
