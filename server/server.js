import Database from "better-sqlite3";
import express from "express";
import cors from "cors";

const db = new Database("database.db");
const app = express();
app.use(cors());
app.use(express.json());
const port = 8080;

app.get("/", (request, response) => {
  response.json("You are in my root route");
});

app.get("/customers", function (req, res) {
  const customers = db.prepare("SELECT * FROM customers").all();
  res.json(customers);
  console.log(req.body);
});

app.post("/search", (req, res) => {
  const customers = db.prepare("SELECT * FROM customers").all();
  const searchTerm = req.body.searchTerm.toLowerCase().trim();
//responds with the filtered stalls list
  const filteredCustomers = customers.filter((customer) => {
    return customer.trading_name.toLowerCase().includes(searchTerm) ||
           customer.categories.toLowerCase().includes(searchTerm) ||
           customer.description_txt.toLowerCase().includes(searchTerm);
  });
//sends just filtered list of stall to the client
  res.json(filteredCustomers);
});


app.listen(port, () => {
  console.log("Server is running");
});