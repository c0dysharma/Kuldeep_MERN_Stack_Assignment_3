import express from "express";

import {
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getAllUsers).patch(updateUser);
router.route("/:id").delete(deleteUser);

export default router;
