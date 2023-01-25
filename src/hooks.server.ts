import type { Handle } from "@sveltejs/kit" ;

export const handle: Handle = (async ({ event, resolve }) =>
{
  const locker: string | undefined = event.cookies.get("locker") ;

  if (locker)
  {
    event.locals.locker = locker ;
  }

  return await resolve(event) ;
}) satisfies Handle ;