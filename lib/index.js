import "@babel/polyfill";
import express from "express";
import router from "./api/expenses";
import bodyParser from "body-parser";

const app = express();
const port = "5000";

app.use(router);
app.use(bodyParser);
app.listen(port, () => console.info(`App listening at port ${port}`));
