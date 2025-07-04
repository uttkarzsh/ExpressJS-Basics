import express from "express";
import { addUser, getUser, deleteUser } from "../controllers/userController.js";
const router = express.Router();

router.route("/user").post(addUser).delete(deleteUser).get(getUser);

export default router;

