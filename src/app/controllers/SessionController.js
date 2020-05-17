import jwt from "jsonwebtoken";
import * as Yup from "yup";

import User from "../models/User";

import auth from "../../config/auth";

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(401)
        .json({ message: "Erro na validação.\nVerifique seus dados." });
    }
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res
          .status(401)
          .json({ message: "Usuário não encontrado.\nVerifique seus dados!" });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ message: "Senha incorreta." });
      }

      const { id, name, phone, address } = user;

      return res.json({
        user: {
          id,
          name,
          email,
          phone,
          address,
        },
        token: jwt.sign({ id }, auth.secret, {
          expiresIn: auth.expiresIn,
        }),
      });
    } catch (err) {
      return res.json({ message: `Erro no servidor! ${err}` });
    }
  }
}

export default new SessionController();
