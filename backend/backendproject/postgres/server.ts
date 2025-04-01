import pg from "npm:pg";
export const pool1 = new pg.Pool({
  user: Deno.env.get("pg_user"),
  host: Deno.env.get("pg_host"),
  database: Deno.env.get("pg_database"),
  password: Deno.env.get("pg_password"),
  port: Deno.env.get("pg_port"),
});
