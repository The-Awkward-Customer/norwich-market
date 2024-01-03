import Database from "better-sqlite3";

const db = new Database("database.db");

db.exec(`CREATE TABLE customers(
    customer_uid INTEGER PRIMARY KEY AUTOINCREMENT,
    trading_name TEXT,
    profile_pic TEXT,
    description_txt TEXT,
    cash_payments INTEGER,
    card_payments INTEGER,
    grid_location TEXT,
    avg_wait TEXT,
    category_ref TEXT,
    mobile_num TEXT,
    email TEXT
)`);
