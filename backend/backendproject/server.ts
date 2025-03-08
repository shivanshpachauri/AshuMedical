import pg from "npm:pg";
export const pool1 = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "medicaldb",
  password: "shivansh",
  port: 5432,
});
