import Sequelize, { Model } from "sequelize";

class Marmitas extends Model {
  static init(sequelize) {
    super.init(
      {
        tamanho: Sequelize.STRING,
        volume: Sequelize.STRING,
        preco: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Marmitas;
