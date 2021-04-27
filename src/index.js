import express from "express";
import routes from "./routes";

const app = express();

app.get("/", (req, res) => res.send("aloalo"));

app.use(routes);

app.listen("4000");
