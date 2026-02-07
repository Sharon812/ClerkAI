import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();

//server listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server started on port" + PORT);
});
