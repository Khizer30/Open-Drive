import { redirect } from "@sveltejs/kit" ;
import type { PageServerLoad } from "./$types" ;

// Redirect
export const load: PageServerLoad = (async ({ cookies }) =>
{
  const locker: string | undefined = cookies.get("locker") ;

  if (!locker)
  {
    throw redirect(302, "/") ;
  }
  else
  {
    return { code: locker } ;
  }
}) satisfies PageServerLoad ;