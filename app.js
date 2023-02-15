import express from "express";
import router from "./src/routes/routesMain.js";
const app = express();

//sim hehehe

app.use(express.json());
app.use("/users", router);

app.listen(3000, () => {
  console.log("Servidor online na porta 3000");
});
