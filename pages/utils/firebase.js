import { initializeApp } from 'firebase/app';
import {collection, getDocs } from 'firebase/firestore/lite';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
apiKey: "AIzaSyD4QZTq49EZv8VRqe75PPcbUamZzHWIQcU",
authDomain: "pingfinance-e8393.firebaseapp.com",
projectId: "pingfinance-e8393",
storageBucket: "pingfinance-e8393.appspot.com",
messagingSenderId: "590545123217",
appId: "1:590545123217:web:8fb3f7412d94c646048c30",
measurementId: "G-KGR6E7RHNH"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUsers() {
    const usersCol = collection(db, 'Users');
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    
    return usersList;
  }


export {db}

