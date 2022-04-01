import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAEMBaNPF_2Wim6Q9YCOvdINpFHP_UWJD4",
    authDomain: "africa-web-warriors.firebaseapp.com",
    projectId: "africa-web-warriors",
    storageBucket: "africa-web-warriors.appspot.com",
    messagingSenderId: "71063555198",
    appId: "1:71063555198:web:f802d9efec22c817341c2f"
  };




let app;
if(firebase.apps.length==0){
  app=firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app();
}


const auth=app.auth();
const db=app.firestore();
const storage=app.storage();




export {auth,db,storage};





