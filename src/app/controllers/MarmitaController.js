import Marmita from "../models/Marmita";
import * as Yup from "yup";

class MarmitaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      tamanho: Yup.string().required(),
      preco: Yup.string().required(),
      volume: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(401)
        .json({ message: "Erro na validação.\nVerifique seus dados." });
    }

    const { tamanho } = req.body;

    try {
      const marmita = await Marmita.create(req.body);

      return res.json({ message: `Marmita ${tamanho} cadastrada com sucesso` });
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }

  async index(req, res) {
    try {
      const marmitas = await Marmita.findAll();

      return res.json(marmitas);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const { tamanho, valor, preco } = req.body;

    try {
      Marmita.update(
        { tamanho: tamanho, valor: valor, preco: preco },
        { where: { id } }
      );

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
      await Marmita.destroy({
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

export default new MarmitaController();
