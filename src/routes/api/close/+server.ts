import { json } from "@sveltejs/kit" ;
import type { RequestHandler } from "./$types" ;

// Close Locker
export const POST = (async ({ cookies }) =>
{
  cookies.set("locker", "", { path: "/", expires: new Date(0) }) ;

  return json({ redirect: true }) ;
}) satisfies RequestHandler ;