import { Router } from "express";
import controller from "../controllers/appointment_controller";
import keyCheckerFor from "./../middlewares/keyCheckerMiddleware"
import { valuesForServiceChecker } from "../middlewares/valueCheckerMiddleware";

const appointments_router: Router = Router();

appointments_router.post("/schedule", keyCheckerFor.createAppointment, valuesForServiceChecker, controller.create_appointment);
appointments_router.get("/", controller.get_all)
appointments_router.get("/:id", controller.get_appointment);
appointments_router.put("/cancel/:id", controller.cancel_appointment);


export default appointments_router;