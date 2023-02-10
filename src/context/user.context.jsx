import { createContext, useState, useEffect } from "react";
import { 
    createUserDocumentFromAuth, 
    onAuthStateChangedListener 
} from "../utils/firebase/firebase.utils";
//actual value you want to access
export const UserContext = createContext({
    currrentUser:null,
    setCurrentUser:()=>null
})

export const UserProvider= ({children}) =>{
    const [currrentUser ,setCurrentUser ] = useState(null)
    const value = {currrentUser , setCurrentUser}


    useEffect(()=>{
       const unsbscribe=  onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
        }
        setCurrentUser(user)

       })
       return unsbscribe
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

