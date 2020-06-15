import User from "../models/User";
import * as Yup from "yup";

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      phone: Yup.string().required(),
      address: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(401)
        .json({ message: "Erro na validação.\nVerifique seus dados." });
    }

    const { email } = req.body;

    try {
      const userExist = await User.findOne({ email });

      if (userExist) {
        return res.json({ message: `O usuário ${email} já está cadastrado.` });
      }

      const { name } = await User.create(req.body);

      return res.json({ message: `Usuário ${name} cadastrado com sucesso` });
    } catch (err) {
      return res.json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }
}

export default new UserController();
