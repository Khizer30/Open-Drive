import { writable } from "svelte/store" ;
import type { Writable } from "svelte/store" ;

// Locker
const locker: Writable<string> = writable("000") ;

// Export Store
export { locker } ;