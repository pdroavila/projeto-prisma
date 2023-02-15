import express from "express";
import router from "./src/routes/routesMain.js";
// sim
const app = express();

app.use(express.json());
app.use("/users", router);

app.listen(3000, () => {
  console.log("Servidor online na porta 3000");
});
