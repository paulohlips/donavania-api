import Bebida from "../models/Bebida";
import * as Yup from "yup";

class BebidaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      preco: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(401)
        .json({ message: "Erro na validação.\nVerifique seus dados." });
    }

    const { nome } = req.body;

    try {
      const verifyBebida = await Bebida.findOne({ where: { nome } });

      if (verifyBebida) {
        return res.json({ message: `${nome} já foi cadastrada` });
      }

      await Bebida.create(req.body);

      return res.json({ message: `${nome} cadastrada com sucesso` });
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }

  async index(req, res) {
    try {
      const bebidas = await Bebida.findAll();

      return res.json(bebidas);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }

  async update(req, res) {
    const id = req.params.id;

    try {
      await Bebida.update(req.body, { where: { id } });

      return res.json({ message: "Atualização realizada com sucesso" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      await Bebida.destroy({
        where: {
          id,
        },
      });

      return res.json({ message: "Excluído com sucesso." });
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }
}

export default new BebidaController();
