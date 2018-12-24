import express from "express";

const app = express();
const port = "5000";

app.listen(port, () => console.info(`App listening at port ${port}`));
