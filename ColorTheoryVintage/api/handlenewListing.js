import { getFirestore, collection, doc, getDocs, addDoc } from "firebase/firestore"

const db = getFirestore();

<<<<<<< HEAD:ColorTheoryVintage/api/handlenewListing.js
export function handleNewListing(item, addComplete){
    const db = getFirestore();
=======
export default function handleNewListing(item, addComplete){
>>>>>>> React-Native:ColorTheoryVintageHolding/api/handlenewListing.js
    const colRef = collection(db, "Items");
    getDocs(colRef).then((snapshot) => {
        console.log("hello")
        let items = []
        // snapshot.docs.forEach((doc) => {
        //     items.push({ ...doc.data() })
        // })
        console.log(snapshot.docs)
    });
}







