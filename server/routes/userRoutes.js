import express from "express";

import {
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getAllUsers).patch(updateUser).delete(deleteUser);

export default router;
