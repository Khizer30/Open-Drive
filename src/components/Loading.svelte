<script lang="ts">
  // ...
  import logo from "images/logo.webp" ;
</script>

<div class="container-fluid d-flex flex-column justify-content-center align-items-center mainContainer">
  <img 
    src={ logo }
    alt="Open Drive" 
    loading="eager"
    draggable="false"
    class="img-fluid w-45 loading" 
  />
</div>

<style>
.mainContainer 
{
  min-height: 90vh ;
}

.loading
{
  animation: loading 1.5s linear infinite both ;
}

@keyframes loading
{
  0% 
  {
    transform: scale(1.0) ;
  }
  50%
  {
    transform: scale(1.25) ;
  }
  100% 
  {
    transform: scale(1.0) ;
  }
}
</style>