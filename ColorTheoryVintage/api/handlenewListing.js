import { getFirestore, collection, doc, getDocs, addDoc } from "firebase/firestore"

const db = getFirestore();

export default function handleNewListing(item, addComplete){
    const colRef = collection(db, "Listings");
    getDocs(colRef).then((snapshot) => {
        console.log("hello")
        let items = []
        // snapshot.docs.forEach((doc) => {
        //     items.push({ ...doc.data() })
        // })
        console.log(snapshot.docs)
    });
}







