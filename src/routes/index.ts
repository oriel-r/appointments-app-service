import { Router } from "express";
import users_router from "./user"
import appointments_router from "./appointment";

const router: Router = Router();

router.use("/users", users_router);
router.use("/appointments", appointments_router)


export default router;