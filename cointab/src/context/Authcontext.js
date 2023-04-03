import { createContext, useState } from "react";

export const Authcontext=createContext();

export const AuthcontextProvider=({children})=>{

    let cred=JSON.parse(localStorage.getItem("cred")) || {};

    const [authstate,setauth]=useState({
        email:cred.email || null,
       
    });

    const login=(credential)=>{

        setauth({...authstate,email:credential.email});
        localStorage.setItem("cred",JSON.stringify(credential));

    }

    const logout=()=>{
        setauth({...authstate,email:null});
        localStorage.removeItem("cred");
    }



    return <Authcontext.Provider value={{authstate,login,logout}}>{children}</Authcontext.Provider>
}