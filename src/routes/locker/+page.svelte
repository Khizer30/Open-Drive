<script lang="ts">
  import { onMount } from "svelte" ;
  import { goto } from "$app/navigation" ;
  import { page } from "$app/stores" ;
  import { ref, uploadBytesResumable, listAll } from "firebase/storage" ;
  import type { StorageReference, UploadTask, UploadTaskSnapshot, StorageError, ListResult } from "firebase/storage" ;
  // ...
  import { storage } from "config/firebase" ;
  import File from "components/File.svelte" ;

  // Redirect
  onMount(async () =>
  {
    if (!$page.data.locker)
    {
      await goto("/", { replaceState: true }) ;
    }
    else
    {
      bucket = await readStorage() ;
    }
  }) ;

  // Read Storage
  async function readStorage(): Promise<StorageReference[]>
  {
    const listRef: StorageReference = ref(storage, `${ $page.data.locker }/`) ;
    const tempBucket: StorageReference[] = [] ;

    await listAll(listRef)
    .then((list: ListResult) =>
    {
      list.items.forEach((itemRef: StorageReference) =>
      {
        tempBucket.push(itemRef) ;
      }) ;
    }) ;

    return tempBucket ;
  }

  let bucket: StorageReference[] = [] ;
  let fileInput: HTMLInputElement | undefined = undefined ;
  let files: FileList | null | undefined = undefined ;
  let progress: number = 0 ;
  let message: string = "" ;
  let show: boolean = true ;

  $:
  {
    if (files && files[0])
    {
      message = files[0].name ;
    }
  }

  // Open File Input
  function openFileInput(): void
  {
    if (fileInput)
    {
      // Reset
      message = "" ;
      progress = 0 ;

      fileInput.click() ;
    }
  }

  // Upload
  async function upload(): Promise<void>
  {
    if (files && files[0])
    {
      const storageRef: StorageReference = ref(storage, `${ $page.data.locker }/${ files[0].name }`) ;
      const uploadTask: UploadTask = uploadBytesResumable(storageRef, files[0]) ;
      show = false ;

      uploadTask.on("state_changed", (snapshot: UploadTaskSnapshot) =>
      {
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 ;
      },
      (error: StorageError) =>
      {
        message = error.code ;
      },
      async () =>
      {
        message = "UPLOAD COMPLETED" ;

        // Reset
        bucket = await readStorage() ;
        files = undefined ;
        show = true ;
      }) ;
    }
    else
    {
      message = "NO FILE SELECTED" ;
      progress = 0 ;
    }
  }
</script>

<svelte:head>
  <title> Locker | Open Drive </title>

  <meta name="keywords" content="Open Drive, Locker, Upload File, Download File" />
</svelte:head>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center lockerContainer">
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
        <button type="button" on:click={ openFileInput } class="uploadBtn { show ? "" : "invisible" }"> SELECT A FILE </button>

        <button type="button" on:click={ upload } class="lockerBtn { show ? "" : "invisible" }"> UPLOAD </button>

      </form>
    </div>
    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center lockerContainer">
      <h1 class="lockerH"> DOWNLOAD FILE </h1>
    
      { #each bucket as item }
        <File name={ item.name } />
      { /each }

    </div>
  </div>
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