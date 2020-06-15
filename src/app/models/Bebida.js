import Sequelize, { Model } from "sequelize";

class Bebidas extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        preco: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Bebidas;
