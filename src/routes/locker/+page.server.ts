import { redirect } from "@sveltejs/kit" ;
import type { PageServerLoad } from "./$types" ;

// Redirect
export const load: PageServerLoad = (async ({ locals }) =>
{
  const locker: string | undefined = locals.locker ;

  if (!locker)
  {
    throw redirect(302, "/") ;
  }
  else
  {
    return { locker: locker } ;
  }
}) satisfies PageServerLoad ;