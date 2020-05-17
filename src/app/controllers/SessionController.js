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
  }
}

export default new SessionController();
