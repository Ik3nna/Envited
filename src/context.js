import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({children})=> {
    const [eventname,setEventname] = useState("");
    const [hostname,setHostname] = useState("");
    const [location,setLocation] = useState("");
    const [time,setTime] = useState("");
    const [date,setDate] = useState("");
    const [list,setList] = useState([])


    const handleSubmit = (e)=>{
        e.preventDefault();

        const newList = {
            ename: eventname,
            hname: hostname,
            ltn: location,
            time: time,
            date: date
        }
        setList(newList);

        alert("Event Created");
    }


    return(
        <AppContext.Provider value={{
            handleSubmit,eventname,setEventname,hostname,setHostname,
            location,setLocation,time,setTime,date,setDate,list,setList
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = ()=> {
    return useContext(AppContext);
}