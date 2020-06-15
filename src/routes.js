import { Router } from "express";

import MarmitaController from "./app/controllers/MarmitaController";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import BebidaController from "./app/controllers/BebidaController";
import MenuController from "./app/controllers/MenuController";
import OrderController from "./app/controllers/OrderController";
import auth from "./app/middlewares/auth";

const routes = Router();

routes.use(auth);
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

routes.get("/marmitas", MarmitaController.index);
routes.post("/marmitas", MarmitaController.store);
routes.put("/marmitas/:id", MarmitaController.update);
routes.delete("/marmitas/:id", MarmitaController.delete);

routes.get("/bebidas", BebidaController.index);
routes.post("/bebidas", BebidaController.store);
routes.put("/bebidas/:id", BebidaController.update);
routes.delete("/bebidas/:id", BebidaController.delete);

routes.get("/menus", MenuController.index);
routes.post("/menus", MenuController.store);
routes.put("/menus/:id", MenuController.update);
routes.delete("/menus/:id", MenuController.delete);

routes.get("/orders", OrderController.index);
routes.post("/orders", OrderController.store);

export default routes;
