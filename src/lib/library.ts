// Fetch POST
async function fetchPost(url: string, data?: object): Promise<Res>
{
  const response: Response = await fetch(url, 
  {
    mode: "same-origin",
    method: "POST",
    headers: 
    {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }) ;

  const res: Res = await response.json() ;

  return res ;
}

// Locker Interface
interface Locker
{
  locker: string ;
}

// Res Interface
interface Res
{
  redirect: boolean ;
}

// Exports
export { fetchPost } ;
export type { Locker, Res } ;