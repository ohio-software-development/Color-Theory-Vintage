import { getFirestore,  collection, addDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { uploadString } from "firebase/storage";

const addNewListing = (data, photo) => {
    console.log(Object.keys(photo))
    // const db = getFirestore();
    // const colRef = collection(db, "Items");
    // addDoc(colRef, data).then((snapshot) => {
    //     console.log("uploaded item");
    // }).catch(() => console.log("error"));
    const storage = getStorage();
    const storageRef = ref(storage, "images/this_will_work.jpg");
    uploadString(storageRef, photo.base64, "base64").then((snapshot) => {
        console.log("photo uploaded")
    }).catch(() => console.log("error"));
}

export default addNewListing;