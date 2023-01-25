import { json } from "@sveltejs/kit" ;
import type { RequestHandler } from "./$types" ;
// ...
import type { Locker } from "$lib/library" ;

// Open Locker
export const POST = (async ({ request, cookies }) =>
{
  const data: Locker = await request.json() ;

  cookies.set("locker", data.locker, { path: "/", httpOnly: true, sameSite: "strict", maxAge: 3600 }) ;

  return json({ redirect: true }) ;
}) satisfies RequestHandler ;