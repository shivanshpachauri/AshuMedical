import pg from "npm:pg";

export const pool1 = new pg.Pool({
  connectionString: Deno.env.get("neon_db_connection_string"),
  ssl: { rejectUnauthorized: false },
  max: 20, // Maximum number of clients
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle
  connectionTimeoutMillis: 10000, // How long to wait for a connection
});
