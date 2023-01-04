import { createContext } from "react";

const CityContext=createContext();

export const CityProvider=({children})=>{
    return <CityContext.Provider value={""}>{children}</CityContext.Provider>
}
