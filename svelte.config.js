import adapter from "@sveltejs/adapter-auto" ;
import { vitePreprocess } from "@sveltejs/kit/vite" ;

/** @type {import("@sveltejs/kit").Config} */
const config = 
{
	preprocess: vitePreprocess(),
	kit: 
  {
		adapter: adapter(),
    alias:
    {
      "$lib": "src/lib",
      "$lib/*": "src/lib/*",
      "images/*": "src/images/*",
      "components/*": "src/components/*",
      "config/*": "src/config/*",
      "styles/*": "src/styles/*"
    }
	}
} ;

export default config ;