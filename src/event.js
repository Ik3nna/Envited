import React from "react";
import { useGlobalContext } from "./context";

const Event = ()=> {
    const {  } = useGlobalContext();

    console.log()

    {list.map((item,index)=>{
        const { ename,hname,ltn,date,time } = item;

        return(
            <section key={index} className="container">
                <div className="section-text">
                    <h2>{ename}</h2>
                    <p>Hosted by {hname}</p>
                </div>
            </section>
        );
    })}

}

export default Event