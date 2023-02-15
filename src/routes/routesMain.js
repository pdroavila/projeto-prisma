import { Router } from "express";
const router = Router();
import { addUser, listUsers } from "../controllers/controllersMain.js";

router.post("/add", function (req, res) {
  addUser(req, res);
});

router.get("/", function (req, res) {
  listUsers(req, res);
});

export default router;
