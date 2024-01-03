import Database from "better-sqlite3";

const db = new Database("database.db");

db.exec(`CREATE TABLE IF NOT EXISTS customers(
    customer_uid INTEGER PRIMARY KEY AUTOINCREMENT,
    trading_name TEXT,
    profile_pic TEXT,
    description_txt TEXT,
    cash_payments INTEGER,
    card_payments INTEGER,
    grid_location TEXT,
    avg_wait TEXT,
    mobile_num TEXT,
    email TEXT,
    categories TEXT
)`);

db.exec(`
INSERT INTO customers (trading_name, profile_pic, description_txt, cash_payments, card_payments, grid_location, avg_wait, mobile_num, email, categories)
VALUES ('lucy''s fish & chips', 'url_to_profile_pic.jpg', 'Cozy local fish and chips with homemade pies.', 1, 1, '10,10', '15 mins', '07896123456', 'lucys@gmail.com', 'kebab,burgers,chips,pies,fish');
`);

db.exec(`
INSERT INTO customers (trading_name, profile_pic, description_txt, cash_payments, card_payments, grid_location, avg_wait, mobile_num, email, categories)
VALUES ('Maggie''s Bakery', 'url_to_bakery_pic.jpg', 'Warm and inviting bakery specializing in fresh bread and pastries.', 1, 0, '20,20', '10 mins', '07987654321', 'maggiebakery@example.com', 'bread,pastries,cakes,coffee');
`);

db.exec(`
INSERT INTO customers (trading_name, profile_pic, description_txt, cash_payments, card_payments, grid_location, avg_wait, mobile_num, email, categories)
VALUES ('Green Thumb Nursery', 'url_to_nursery_pic.jpg', 'Family-owned nursery with a wide selection of plants and gardening supplies.', 1, 1, '30,30', '20 mins', '07771234567', 'greenthumb@example.com', 'plants,supplies,decor,gardening');
`);
