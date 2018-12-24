import express from "express";
const router = express.Router();

import {
  getExpenses,
  insertExpenses,
  changeExpenses,
  deleteExpenses
} from "./expenses.controller";

router.get("/expenses", getExpenses);

router.post("/expenses", insertExpenses);

router.put("/expenses", changeExpenses);

router.delete("/expenses", deleteExpenses);

export default router;
