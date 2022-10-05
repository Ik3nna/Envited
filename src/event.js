import React from "react";
import { IoIosCalendar } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

const Event = ()=> {
    const [searchParams,setSearchParams] = useSearchParams();

    let dateString = searchParams.get("date");
    let dateObject = new Date(dateString);

    let time = searchParams.get("time").split(':');
    let meridiemTime = time[0] >= 12 && (time[0]-12 || 12) + ':' + time[1] + ' PM' || (Number(time[0]) || 12) + ':' + time[1] + ' AM';

    return(
        <main className="event-container">
            <div className="text-content">
                <h2>{searchParams.get("eventname")}</h2>
                <p>Hosted by <strong className="text-capitalize">{searchParams.get("hostname")}</strong></p>

                <div className="stack">
                    <span><IoIosCalendar className="icons" /></span> 
                        
                    <div className="stack-text">
                        <strong>{dateObject.toString()}</strong>
                        <strong>{meridiemTime}</strong>
                    </div>
                </div>

                <div className="stack">
                    <span><HiOutlineLocationMarker className="icons" /></span> 
                        
                    <div className="stack-text">
                        <strong>{searchParams.get("location")} </strong>
                    </div>
                </div>
            </div>

            <img className="img" src={process.env.PUBLIC_URL+"images/cake_img.png"} />
        </main>
    );
}

export default Event