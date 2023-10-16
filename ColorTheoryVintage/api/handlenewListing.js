import { getFirestore, collection, doc, getDocs, addDoc } from "firebase/firestore"


export function handleNewListing(item, addComplete){
    const db = getFirestore();
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







