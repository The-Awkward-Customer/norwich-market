import Database from "better-sqlite3";
import express from "express";
import cors from "cors";

const db = new Database("database.db");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.json("You are in my root route");
});
