import Express from "express";
const router = Express.router();

import { getExpenses, insertExpenses } from "./expenses.controller";

router.get("/expenses", getExpenses);

router.post("/expenses", insertExpenses);

router.put("/expenses");

router.delete("/expenses");

export default router;
