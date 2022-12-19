
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../utils/firebase";


export default async (req, res) =>{
// Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)
  const data = {
    name: body.email,
   
  };
  

  const docRef = await addDoc(collection(db, "Users"), data);

  

  }
  