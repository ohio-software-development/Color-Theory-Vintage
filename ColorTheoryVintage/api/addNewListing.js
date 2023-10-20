import { getFirestore,  collection, addDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { uploadString } from "firebase/storage";
import {v4} from "uuid";


addNewListing = async (data, photo) => {
    console.log(Object.keys(photo))
    const db = getFirestore();
    const colRef = collection(db, "Items");
    addDoc(colRef, data).then((snapshot) => {
        console.log("uploaded item");
    }).catch(() => console.log("error"));


    const metadata = {
        contentType: 'image/jpeg',
        firebaseStorageDownloadTokens: v4() //In this line you are adding the access token
      };
    
    const storage = getStorage();
    const storageRef = ref(storage, "/images/brady" + v4() + ".jpeg");
    console.log(photo.uri);
    const response = await fetch(photo.uri)
    const bytes = await response.blob();
    await uploadBytes(storageRef, bytes, metadata).then(() =>{
        alert("image uploaded");
    })


    // const storage = getStorage();
    // const response = await fetch(photo.uri)
    // console.log("HIT");
    // const blob = await response.blob();
    // var storageRef = ref(storage, "/images/bradyNew" + v4() + ".jpeg");
    // alert("image uploaded");
    // return storageRef.put(blob)

    // console.log(photo.base64);
    // const message2 = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
    // uploadString(storageRef, message2, "base64").then((snapshot) => {
    //     console.log("photo uploaded")
    // }).catch(() => console.log("error"));
}

export default addNewListing;