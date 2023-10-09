import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"
import Item from "../classes/Item";

const db = getFirestore();

export default function handleNewListing(item, addComplete){
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

test = new Item(price = "50");







