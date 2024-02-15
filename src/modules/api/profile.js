 
import { auth,db } from "../firebase";
import axios from "axios";
import { doc,getDoc,setDoc , updateDoc,collection,addDoc}  from "firebase/firestore";
import {getStorage, ref, uploadBytes } from "firebase/storage"


const uploadFile=async(file)=>{
    console.log("Uploading")
    const storage = getStorage();
    const fileId=Math.random().toString(36).substring(2,8+2);
    const storageRef = ref(storage, `/${fileId}`);
    console.log(storageRef,"shote")
    const snapshot=await uploadBytes(storageRef, file)

    return `https://firebasestorage.googleapis.com/v0/b/${snapshot?.metadata?.bucket}/o/${snapshot?.metadata?.name}?alt=media`

}


export const profileApi= {
    updateImg:async function (user,profile,file) {
          try{
            const img=await uploadFile(file)

            const ref =doc(db,"users",user?.id)
            const docSnap = await getDoc(ref);
               await updateDoc(doc(db,"users",user?.id), {
                    img:img
                })

                return true

          }catch(e){
            console.log(e)
          }
    },
    editEmail:async function (user,profile,file) {
        try{

    

            const ref =doc(db,"users",user?.id)
            const docSnap = await getDoc(ref);
               await updateDoc(doc(db,"users",user?.id), {
                  email:profile?.emsil
                })

                return true
        

            }catch(e){
          console.log(e)
        }
    },
    saveChanges:async function (user,profile,file) {
        try{
            // const img=await uploadFile(file)

            console.log(profile,"save cha")

            const ref =doc(db,"users",user?.id)
            const docSnap = await getDoc(ref);
               const doc=await updateDoc(doc(db,"users",user?.id),profile)
               console.log(doc,"cooo")
                return true

            }catch(e){
          console.log(e)
        }
    }
}