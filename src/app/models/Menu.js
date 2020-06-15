import Sequelize, { Model } from "sequelize";

class Menu extends Model {
  static init(sequelize) {
    super.init(
      {
        acompanhamentos: Array(Sequelize.STRING),
        carnes: Array(Sequelize.STRING),
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Menu;
