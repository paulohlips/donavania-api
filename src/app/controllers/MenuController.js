import Menu from "../models/Menu";
import * as Yup from "yup";

class MenuController {
  async store(req, res) {
    const schema = Yup.object().shape({
      acompanhamentos: Yup.string().required(),
      carnes: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(401)
        .json({ message: "Erro na validação.\nVerifique seus dados." });
    }

    try {
      await Menu.create(req.body);

      return res.json({ message: "Menu adicionado com sucesso!" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }

  async index(req, res) {
    try {
      const Menus = await Menu.findAll();

      return res.json(Menus);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }

  async update(req, res) {
    const id = req.params.id;

    try {
      await Menu.update(req.body, { where: { id } });

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
      await Menu.destroy({
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

export default new MenuController();
