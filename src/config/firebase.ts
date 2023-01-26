import { initializeApp } from "firebase/app" ;
import { getStorage } from "firebase/storage" ;
import type { FirebaseApp } from "firebase/app" ;
import type { FirebaseStorage } from "firebase/storage" ;
// ...
import { PUBLIC_FIREBASE } from "$env/static/public" ;

const firebaseConfig: object = JSON.parse(PUBLIC_FIREBASE) ;

// Firebase Setup
const app: FirebaseApp = initializeApp(firebaseConfig) ;
const storage: FirebaseStorage = getStorage(app) ;

// Export Storage
export { storage } ;