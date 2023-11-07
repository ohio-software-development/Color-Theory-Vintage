import { getFirestore, getDoc, doc } from "firebase/firestore";

const getUser = async (userUid) => {
    const db = getFirestore();
    const colRef = doc(db, "Users", userUid);

    try {
        const userData = await getDoc(colRef);
        if (userData.exists()) {
            return userData.data();
        } else {
            throw new Error("User document does not exist");
        }
    } catch (error) {
        console.error("Error getting user data:", error);
        throw error; // Re-throw the error so that it can be caught by the caller
    }
}

export default getUser;
