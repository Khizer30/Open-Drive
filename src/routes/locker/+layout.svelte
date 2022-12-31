<script lang="ts">
  import { goto } from "$app/navigation" ;
  // ...
  import logo from "images/logo.webp" ;
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
        <li class="nav-item">
          <a href="/locker/upload" class="nav-link navLink"> UPLOAD </a>
        </li>
        <li class="nav-item">
          <a href="/locker/download" class="nav-link navLink"> DOWNLOAD </a>
        </li>
        <li class="nav-item">
          <button type="button" on:click={ () => goto("/") } class="nav-link navLink"> CLOSE LOCKER </button>
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