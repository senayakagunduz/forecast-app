import { createContext } from "react";

const WheatherContext=createContext();

export const WheatherProvider=({children})=>{

    return <WheatherContext.Provider value={""}>{children}</WheatherContext.Provider>
}