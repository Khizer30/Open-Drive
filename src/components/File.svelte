<script lang="ts">
  import { fly } from "svelte/transition" ;
  // ...
  import downloadImg from "images/download.svg" ;
  import deleteImg from "images/delete.svg" ;

  export let name: string = "" ;
</script>

<div in:fly={{ x: 50, duration: 500 }} out:fly={{ x: -50, duration: 500 }} class="d-flex justify-content-evenly align-items-center fileDiv">
  <p class="fileP"> { name } </p>
  <div class="d-flex justify-content-evenly align-items-center">
    <button type="button" class="d-flex justify-content-center align-items-center fileBtn">
      <img 
        src={ downloadImg }
        alt="Download" 
        loading="eager"
        draggable="false"
        class="fileBtnImg" 
      />
    </button>
    <button type="button" class="d-flex justify-content-center align-items-center fileBtn">
      <img 
        src={ deleteImg }
        alt="Delete" 
        loading="eager"
        draggable="false"
        class="fileBtnImg" 
      />
    </button>
  </div>
</div>

<style>
.fileDiv 
{
  width: 75% ;
  height: 55px ;
  background: #4E4C4E ;
  border: none ;
  border-radius: 15px ;
  margin: 0.25rem 0rem ;
}

.fileP 
{
  font-family: "Bebas Neue", serif ;
  color: #DBDBDB ;
  font-size: 1em ;
  text-align: center ;
}

.fileBtn 
{
  border: 1.5px solid #DBDBDB ;
  border-radius: 100px ;
  background: #DBDBDB ;
  min-width: 30px ;
  max-width: 30px ;
  min-height: 30px ;
  max-height: 30px ;
  margin: 0rem 0.5rem ;

  transition: all 200ms ease-in ;
}

.fileBtn:hover
{
  background: #FFFFFF ;
}

.fileBtn:active
{
  transform: scale(0.90) ;
}

.fileBtnImg 
{
  min-width: 20px ;
  max-width: 20px ;
  min-height: 20px ;
  max-height: 20px ;
}
</style>