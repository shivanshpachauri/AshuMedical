import { pool1 } from "./server.ts";
const connect = (async () => {
  try {
    const client = await pool1.connect();
    console.log("Connected to database");
    client.release();
  } catch (err) {
    console.error("Database connection error:", err);
  }
})();
export default connect;
