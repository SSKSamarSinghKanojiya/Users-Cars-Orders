import express from "express";
import Router from "./routes/index";
import dotenv from "dotenv";
import { Model } from "objection";
import { BaseKnex } from "./config/db/knex";
import bodyParser from "body-parser";
import winston = require("winston");
import { httLogger } from "./service/logger";

dotenv.config();
Model.knex(BaseKnex);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router);

app.listen(PORT, () => {
  console.log(`Express is listening at http://localhost:${PORT}`);
  httLogger.info(`Express is listening at http://localhost:${PORT}`);
});
