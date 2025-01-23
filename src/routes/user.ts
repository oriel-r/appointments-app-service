import { Router } from "express";
import controller from "../controllers/user_controller";
import keyCheckerFor from "./../middlewares/keyCheckerMiddleware"
import { valuesForServiceChecker } from "../middlewares/valueCheckerMiddleware";

const users_router: Router = Router();

users_router.get("/:id", controller.get_user_by_id);
users_router.get("/", controller.get_users);
users_router.post("/register", keyCheckerFor.register, valuesForServiceChecker,  controller.create_user);
users_router.post("/login", keyCheckerFor.login, valuesForServiceChecker, controller.login_user );

export default users_router;