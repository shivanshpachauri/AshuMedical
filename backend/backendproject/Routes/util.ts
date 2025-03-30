import { decode } from "https://deno.land/x/djwt@v2.8/mod.ts";

export async function verifyGoogleToken(token: string) {
  const response = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
  );
  if (!response.ok) return null;

  const payload = await response.json();
  return payload;
}
