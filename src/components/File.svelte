<script lang="ts">
  import { fly } from "svelte/transition" ;
  import { getDownloadURL, deleteObject } from "firebase/storage" ;
  import type { StorageReference } from "firebase/storage" ;
  // ...
  import { fetchGet } from "$lib/library" ;
  import downloadImg from "images/download.svg" ;
  import deleteImg from "images/delete.svg" ;

  // Props
  export let storageRef: StorageReference ;
  export let render: () => Promise<void> ;

  // Download
  async function download(): Promise<void>
  {
    await getDownloadURL(storageRef)
    .then(async (url: string) =>
    {
      const file: Blob = await fetchGet(url) ;

      const a: HTMLAnchorElement = document.createElement("a") ;
      a.href = window.URL.createObjectURL(file) ;
      a.download = storageRef.name ;
      a.click() ;
      a.remove() ;
    }) ;
  }

  // Remove
  async function remove(): Promise<void>
  {
    await deleteObject(storageRef)
    .then(() =>
    {
      render() ;
    }) ;
  }
</script>

<div in:fly={{ x: 50, duration: 500 }} out:fly={{ x: -50, duration: 500 }} class="d-flex justify-content-center align-items-center fileDiv">
  <div class="col-7">
    <p class="text-break fileP"> { storageRef.name } </p>
  </div>
  <div class="col-5 d-flex justify-content-center align-items-center">
    <button type="button" on:click={ download } class="d-flex justify-content-center align-items-center fileBtn">
      <img 
        src={ downloadImg }
        alt="Download" 
        loading="eager"
        draggable="false"
        class="fileBtnImg" 
      />
    </button>
    <button type="button" on:click={ remove } class="d-flex justify-content-center align-items-center fileBtn">
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

  transition: all 100ms ease-in ;
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