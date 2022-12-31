<script lang="ts">
  import { page } from "$app/stores" ;
  import "@fontsource/bebas-neue" ;
  // ...
  import Transition from "components/Transition.svelte" ;
  import "styles/global.css" ;
</script>

<Transition url={ $page.url }>
  <slot />
</Transition>

<footer class="d-flex justify-content-center align-items-center">
  <span class="footerSpan"> BY SYED MUHAMMAD KHIZER </span>
</footer>