import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { verifyGoogleToken } from "./utils.ts"; // A separate function to verify token

serve(
  async (req: {
    method: string;
    url: string | URL;
    json: () => PromiseLike<{ token: any }> | { token: any };
  }) => {
    if (
      req.method === "POST" &&
      new URL(req.url).pathname === "/validate-google"
    ) {
      const { token } = await req.json();

      const payload = await verifyGoogleToken(token);
      if (payload) {
        return new Response(
          JSON.stringify({ message: "Login Successful", user: payload }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      } else {
        return new Response(JSON.stringify({ error: "Invalid Token" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    return new Response("Not Found", { status: 404 });
  }
);
