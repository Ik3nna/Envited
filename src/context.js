import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({children})=> {
    const [eventname,setEventname] = useState("");
    const [hostname,setHostname] = useState("");
    const [location,setLocation] = useState("");

    const [list,setList] = useState([]);

    const handleSubmit = (e)=> {
        e.preventDefault();


    
    }

    return(
        <AppContext.Provider value={{
            
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = ()=> {
    return useContext(AppContext);
}