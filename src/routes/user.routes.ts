import express from "express";
import { getUsersDatas, addUser, updateUser } from "../controller/user.controller.js";

const router = express.Router();

router.get("/users", getUsersDatas);
router.post("/users", addUser);
router.patch("/users/:id", updateUser);

export default router;