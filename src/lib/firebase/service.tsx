import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import config from "./config";

const db = getFirestore(config);

export async function getData(table: string) {
    const snapshot = await getDocs(collection(db, table));

    const data = snapshot.docs.map(res => ({
        id: res.id,
        ...res.data()
    }));
    return data;
}

export async function getDataById(table:string, id: string){
    const snapshot = await getDoc(doc(db, table, id));

    const data = snapshot.data();
    return data;
}