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

// Fetch GET
async function fetchGet(url: string): Promise<Blob>
{
  const response: Response = await fetch(url, 
  {
    mode: "cors",
    method: "GET"
  }) ;

  const res: Blob = await response.blob() ;

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
export { fetchPost, fetchGet } ;
export type { Locker, Res } ;