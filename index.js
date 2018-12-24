import express from "express";
import router from "./lib/api/expenses/index";
const app = express();
const port = "5000";

app.use(router);
app.listen(port, () => console.info(`App listening at port ${port}`));
