<script lang="ts">
  let message: string = "" ;
</script>

<svelte:head>
  <title> Download | Open Drive </title>

  <meta name="keywords" content="Open Drive, Download" />
</svelte:head>

<div class="container-fluid d-flex flex-column justify-content-center align-items-center lockerContainer">
  <h1 class="lockerH"> DOWNLOAD FILE </h1>
  <form method="post" target="_self" enctype="application/x-www-form-urlencoded" autocomplete="off" class="d-flex flex-column justify-content-center align-items-center w-100">

    { #if message }
      <span class="lockerSpan"> { message } </span>
    { :else }
      <span class="lockerSpan"> <br /> </span>
    { /if }

    <select required class="form-select d-flex justify-content-center align-items-center lockerSelect">
      <option class="d-none" selected disabled> SELECT A FILE </option>
      <option> Image.png </option>
      <option> File.rar </option>
    </select>

    <button type="button" class="lockerBtn"> DOWNLOAD </button>

  </form>
</div>

<style>
.lockerContainer 
{
  min-height: 80vh ;
}

.lockerH 
{
  font-family: "Bebas Neue", serif ;
  text-align: center ;
  font-size: 3em ;
  color: #4E4C4E ;
  margin: 0.5rem 0rem ;
}

.lockerSpan 
{
  font-family: "Bebas Neue", serif ;
  color: #4E4C4E ;
  font-size: 1em ;
  text-align: center ;
  margin: 0.5rem 0rem ;
}

.lockerBtn 
{
  height: 45px ;
  width: 150px ;
  font-family: "Bebas Neue", serif ;
  text-align: center ;
  color: #DBDBDB ;
  background: #4E4C4E ;
  font-size: 1.5em ;
  border: #4E4C4E 1px solid ;
  border-radius: 30px ;
  margin: 0.5rem 0rem ;

  transition: all 200ms ease-in ;
}

.lockerBtn:hover
{
  color: #4E4C4E ;
  background: #DBDBDB ;
}

.lockerBtn:active
{
  transform: scale(0.90) ;
}

.lockerSelect 
{
  width: 75% ;
  color: #4E4C4E ;
  background: #DBDBDB ;
  font-family: "Bebas Neue", serif ;
  font-size: 1.2em ;
  margin: 0.5rem 0rem ;
  height: 40px ;
  border: 1px solid #4E4C4E ;
}

.lockerSelect:focus
{
  border: 1px solid #4E4C4E ;
  box-shadow: 2.5px 2.5px #4E4C4E ;
}
</style>