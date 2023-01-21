import { createContext,useState } from "react";

const CityContext =createContext();

export const CityProvider=({children})=>{
    const [city, setCity] = useState('Eskişehir');
    const values = {
        city,
        setCity,
    };
    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}


export default CityContext;