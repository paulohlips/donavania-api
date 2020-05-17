import { Router } from "express";

import MarmitaController from "./app/controllers/MarmitaController";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

const routes = Router();

routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

routes.get("/marmitas", MarmitaController.index);
routes.post("/marmitas", MarmitaController.store);
routes.put("/marmitas/:id", MarmitaController.update);
routes.delete("/marmitas/:id", MarmitaController.delete);

export default routes;
