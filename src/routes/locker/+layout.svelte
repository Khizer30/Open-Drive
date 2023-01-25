<script lang="ts">
  import { goto } from "$app/navigation" ;
  // ...
  import { fetchPost } from "$lib/library" ;
  import type { Res } from "$lib/library" ;
  import logo from "images/logo.webp" ;

  // Close Locker
  async function close(): Promise<void>
  {
    const res: Res = await fetchPost("/api/close") ;

    if (res.redirect)
    {
      await goto("/", { replaceState: true }) ;
    }
  }
</script>

<nav class="navbar navbar-light navbar-expand navBar">
  <div class="container-fluid">
    <img 
      src={ logo }
      alt="Open Drive" 
      loading="eager"
      draggable="false"
      class="mg-fluid navBarImg" 
    />
    <div id="navCol" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item d-flex justify-content-center align-items-center">
          <button type="button" on:click={ close } class="nav-link navLink"> CLOSE LOCKER </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<slot />

<style>
.navBar 
{
  min-height: 10vh ;
  padding: 0 ;
}

.navBarImg 
{
  width: 75px ;
  height: 75px ;
}

.navLink 
{
  font-family: "Bebas Neue", serif ;
  text-align: center ;
  font-size: 1.25em ;
  color: #4E4C4E ;
  background: #DBDBDB ;
  border: none ;

  transition: all 200ms ease-in ;
}

.navLink:hover
{
  color: #000000 ;
}

.navLink:active
{
  transform: scale(0.90) ;
}
</style>