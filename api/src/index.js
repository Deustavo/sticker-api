
import express from "express";
import routes from "./routes";
import { connect, connection } from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.once("open", () => {
  console.log("conectado com o banco de dados");
});

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(cors({
  origin: "http://localhost:3000"
}))

app.get("/", (req, res) => res.send("aloalo"));

app.use(bodyParser.json());

app.use(routes);

app.listen("4000");
