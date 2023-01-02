<script lang="ts">
  let fileInput: HTMLInputElement | undefined = undefined ;
  let files: FileList | null | undefined = undefined ;
  let progress: number = 0 ;
  let message: string = "" ;

  $:
  {
    if (files && files[0].name)
    {
      message = files[0].name ;
    }
  }

  // Open File Input
  function openFileInput(): void
  {
    if (fileInput)
    {
      fileInput.click() ;
    }
  }
</script>

<svelte:head>
  <title> Upload | Open Drive </title>

  <meta name="keywords" content="Open Drive, Upload" />
</svelte:head>

<div class="container-fluid d-flex flex-column justify-content-center align-items-center lockerContainer">
  <h1 class="lockerH"> UPLOAD FILE </h1>
  <form method="post" target="_self" enctype="multipart/form-data" autocomplete="off" class="d-flex flex-column justify-content-center align-items-center w-100">

    <div class="progress progressBar">
      <div style="width: { progress }%;" aria-valuenow={ 100 } aria-valuemin={ 0 } aria-valuemax={ 100 } class="progress-bar bg-dark progress-bar-striped progress-bar-animated"></div>
    </div>

    { #if message }
      <span class="lockerSpan"> { message } </span>
    { :else }
      <span class="lockerSpan"> <br /> </span>
    { /if }

    <input type="file" bind:files={ files } bind:this={ fileInput } accept=".pdf, .pptx, .docx, .jpeg, .jpg, .png, .webp, .rar" required class="form-control d-none" />
    <button type="button" on:click={ () => openFileInput() } class="uploadBtn"> SELECT A FILE </button>

    <button type="button" class="lockerBtn"> UPLOAD </button>
    
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

.progressBar 
{
  margin: 0.5rem 0rem ;
  height: 50px ;
  width: 75% ;
  border: 1px #4E4C4E solid ;
  background: #DBDBDB ;
}

.uploadBtn 
{
  height: 45px ;
  width: 200px ;
  font-family: "Bebas Neue", serif ;
  text-align: center ;
  color: #4E4C4E ;
  background: #DBDBDB ;
  font-size: 1.5em ;
  border: #4E4C4E 1px solid ;
  border-radius: 30px ;
  margin: 0.5rem 0rem ;

  transition: all 200ms ease-in ;
}

.uploadBtn:hover
{
  color: #DBDBDB ;
  background: #4E4C4E ;
}

.uploadBtn:active
{
  transform: scale(0.90) ;
}
</style>