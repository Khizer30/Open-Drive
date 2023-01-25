<script lang="ts">
  import { onMount } from "svelte" ;
  import { goto } from "$app/navigation" ;
  import { page } from "$app/stores" ;
  // ...
  import { fetchPost } from "$lib/library" ;
  import type { Res } from "$lib/library" ;
  import logo from "images/logo.webp" ;

  // Redirect
  onMount(async () =>
  {
    if ($page.data.locker)
    {
      await goto("/locker", { replaceState: true }) ;
    }
  }) ;

  let a: number = 0 ;
  let b: number = 0 ;
  let c: number = 0 ;

  // Change No
  function changeNo(x: string): void
  {
    if (x === "a")
    {
      if (a < 9)
      {
        a++ ;
      }
      else
      {
        a = 0 ;
      }
    }
    else if (x === "b")
    {
      if (b < 9)
      {
        b++ ;
      }
      else
      {
        b = 0 ;
      }
    }
    else if (x === "c")
    {
      if (c < 9)
      {
        c++ ;
      }
      else
      {
        c = 0 ;
      }
    }
  }

  // Start
  async function start(): Promise<void>
  {
    let code: string = "" ;
    code += a ;
    code += b ;
    code += c ;

    const res: Res = await fetchPost("/api/locker", { locker: code }) ;

    if (res.redirect)
    {
      await goto("/locker", { replaceState: true }) ;
    }
  }
</script>

<svelte:head>
  <title> Open Drive </title>
  
  <meta name="keywords" content="Open Drive, Home" />
</svelte:head>

<div class="container-fluid d-flex flex-column justify-content-center align-items-center mainContainer">
  <img 
    src={ logo }
    alt="Open Drive" 
    loading="eager"
    draggable="false"
    class="img-fluid w-45" 
  />

  <p class="mainP"> Open Drive is a free, easy-to-use, accessible to all, cloud drive for storing small files such as PDFs, Images &amp; PowerPoint Slides <br /> Select a Locker No. &amp; Open It Up! </p>
  
  <form method="post" target="_self" enctype="application/x-www-form-urlencoded" autocomplete="off" class="w-100">

    <div class="d-flex justify-content-center align-items-center marginTB">
      <button type="button" on:click={ () => changeNo("a") } class="d-flex justify-content-center align-items-center locker"> { a } </button>
      <button type="button" on:click={ () => changeNo("b") } class="d-flex justify-content-center align-items-center locker"> { b } </button>
      <button type="button" on:click={ () => changeNo("c") } class="d-flex justify-content-center align-items-center locker"> { c } </button>
    </div>

    <div class="d-flex justify-content-center align-items-center marginTB">
      <button type="button" on:click={ start } class="d-flex justify-content-center align-items-center openBtn"> OPEN </button>
    </div>
    
  </form>
</div>

<style>
.mainContainer 
{
  min-height: 90vh ;
}

.mainP 
{
  font-family: "Bebas Neue", serif ;
  text-align: center ;
  color: #4E4C4E ;
}

.locker 
{
  text-align: center ;
  font-family: "Bebas Neue", serif ;
  font-size: 3.5em ;
  color: #4E4C4E ;
  background: #DBDBDB ;
  border: #4E4C4E 1px solid ;
  border-radius: 100px ;
  min-width: 1.5em ;
  max-width: 1.5em ;
  min-height: 1.5em ;
  max-height: 1.5em ;
  margin: 0rem 0.5rem ;

  transition: all 200ms ease-in ;
}

.locker:hover
{
  color: #DBDBDB ;
  background: #4E4C4E ;
}

.locker:active
{
  transform: scale(0.90) ;
}

.openBtn 
{
  height: 45px ;
  width: 150px ;
  color: #DBDBDB ;
  background: #4E4C4E ;
  border: #4E4C4E 1px solid ;
  border-radius: 100px ;
  font-family: "Bebas Neue", serif ;
  text-align: center ;
  font-size: 1.5em ;

  transition: all 200ms ease-in ;
}

.openBtn:hover
{
  color: #4E4C4E ;
  background: #DBDBDB ;
}

.openBtn:active
{
  transform: scale(0.90) ;
}
</style>