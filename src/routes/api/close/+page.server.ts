import { redirect } from "@sveltejs/kit" ;
import type { PageServerLoad } from "./$types" ;

// Redirect
export const load: PageServerLoad = (async ({ locals }) =>
{
  if (locals.locker)
  {
    throw redirect(302, "/locker") ;
  }
  else
  {
    throw redirect(302, "/") ;
  }
}) satisfies PageServerLoad ;