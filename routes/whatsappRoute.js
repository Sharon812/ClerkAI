import { Router } from "express";
const userRoute = Router();

import { handleIncomingMessage } from "../controller/whatsappController.js";

userRoute.post("/whatsapp", handleIncomingMessage);

export default userRoute;
