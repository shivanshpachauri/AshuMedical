import { pool1 } from "./server.ts";
const createTables = async () => {
  const queries = [
    `CREATE TABLE IF NOT EXISTS medicalschema.register (fullname TEXT, dob TEXT, username TEXT, gender TEXT, email TEXT, password TEXT)`,
    `CREATE TABLE IF NOT EXISTS medicalschema.medicaldb (id BIGSERIAL PRIMARY KEY, name TEXT, price DOUBLE PRECISION, manufacturer_name TEXT, pack_size_label TEXT, short_composition1 TEXT)`,
    `CREATE TABLE IF NOT EXISTS medicalschema.delivery (id BIGSERIAL PRIMARY KEY, name TEXT, pack_size_label TEXT, manufacturer_name TEXT, order_by TEXT, quantity TEXT, delivered TEXT, date TEXT)`,
    `CREATE TABLE IF NOT EXISTS medicalschema.AI (id BIGSERIAL PRIMARY KEY, title TEXT, body TEXT)`,
    `CREATE TABLE IF NOT EXISTS medicalschema.CART(id BIGSERIAL PRIMARY KEY,image BYTEA,name TEXT,DESCRIPTION TEXT,price DOUBLE PRECISION)`,
  ];
  try {
    for (const query of queries) {
      await pool1.query(query);
    }
  } catch (error) {
    console.error("Error creating tables:", error);
    throw error;
  }
};
export default createTables;
