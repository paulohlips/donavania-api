import Order from "../models/Order";
import User from "../models/User";
import * as Yup from "yup";

class OrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      hora_entrega: Yup.string(),
      hora_retirada: Yup.string(),
      valor: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(401)
        .json({ message: "Erro na validação.\nVerifique seus dados." });
    }

    req.body["user_id"] = req.userId;

    const { user_id, hora_entrega, hora_retirada, valor } = req.body;

    try {
      const { id, name, address, phone } = await User.findOne({
        where: { id: req.userId },
      });
      const userdata = {
        name,
        address,
        phone,
        hora_entrega,
        hora_retirada,
        valor,
        user_id,
      };

      const order = await Order.create(userdata);

      return res.json({ id, name, address, phone, order });
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }

  async index(req, res) {
    try {
      const Orders = await Order.findAll();

      return res.json(Orders);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }
}

export default new OrderController();
