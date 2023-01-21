import { redirect } from "@sveltejs/kit" ;
import type { PageServerLoad, Actions } from "./$types" ;

// Redirect
export const load: PageServerLoad = (async ({ cookies }) =>
{
  if (cookies.get("locker"))
  {
    throw redirect(302, "/locker") ;
  }
  else
  {
    throw redirect(302, "/") ;
  }
}) satisfies PageServerLoad ;

// Close Locker
export const actions: Actions =
{
  default: async ({ cookies }) =>
  {
    cookies.set("locker", "", { path: "/", expires: new Date(0) }) ;

    throw redirect(302, "/") ;
  }
} ;