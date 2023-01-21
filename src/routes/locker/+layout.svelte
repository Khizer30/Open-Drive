<script lang="ts">
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
        <li class="nav-item d-flex justify-content-center align-items-center">
          <form action="/api/close" method="post" target="_self" enctype="application/x-www-form-urlencoded" autocomplete="off">
            <button type="submit" class="nav-link navLink"> CLOSE LOCKER </button>
          </form>
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