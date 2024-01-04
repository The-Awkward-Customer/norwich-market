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
VALUES ('lucy''s fish & chips', 'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/306767072_502741765190179_4653299137153398266_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=jde1KuGk32AAX-K8SSm&_nc_ht=scontent-lhr6-1.xx&oh=00_AfBWPTt3gFbQhcFR66eUhSoJsWp5kOWxyLkaq3_WwrxCiw&oe=659B796B', 'Cozy local fish and chips with homemade pies.', 1, 1, '10,10', '15 mins', '07896123456', 'lucys@gmail.com', 'kebab,burgers,chips,pies,fish');
`);

db.exec(`
INSERT INTO customers (trading_name, profile_pic, description_txt, cash_payments, card_payments, grid_location, avg_wait, mobile_num, email, categories)
VALUES ('Bread Source Bakery', 'https://norwichmarket.net/wp-content/uploads/2020/11/Bread-Source-300x216.jpg', 'Warm and inviting bakery specializing in fresh bread and pastries.', 1, 0, '20,20', '10 mins', '07987654321', 'maggiebakery@example.com', 'bread,pastries,cakes,coffee');
`);

db.exec(`
INSERT INTO customers (trading_name, profile_pic, description_txt, cash_payments, card_payments, grid_location, avg_wait, mobile_num, email, categories)
VALUES ('Bodega New York Sandwiches', 'https://www.eveningnews24.co.uk/resources/images/16312743/?type=responsive-gallery-fullscreen', 'NYC comes to NRW. Loud mouthed sandwich shop on the historic Norwich Market.', 1, 1, '30,30', '20 mins', '07771234567', 'greenthumb@example.com', 'american, sandwich, deli, new york, sub, vegan');
`);
