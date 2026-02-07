import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//importing routes
import userRoute from "./routes/whatsappRoute.js";

app.use("/webhook", userRoute);

export default app;
