import {db} from "./firebase"
import {collection, getDocs } from 'firebase/firestore/lite';

async function getUsers() {
    const usersCol = collection(db, 'Users');
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => console.log(doc.data()));
    return usersList;
  }


export {getUsers}