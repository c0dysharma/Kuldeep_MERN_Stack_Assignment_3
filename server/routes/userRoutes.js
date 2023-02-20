import express from "express";

import User from "../models/userModel.js";

const router = express.Router();

router
  .route("/")
  .get((req, res) => res.send("Get all users"))
  .patch((req, res) => res.send("update user"))
  .delete((req, res) => res.send("delete user"));

export default router;
