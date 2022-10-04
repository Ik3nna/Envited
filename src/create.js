import React, { useState} from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";


const Create = ()=> {
    const [eventname,setEventname] = useState("");
    const [hostname,setHostname] = useState("");
    const [location,setLocation] = useState("");
    const [time,setTime] = useState("");
    const [date,setDate] = useState("");

    const [list,setList] = useState({
        ename: eventname,
        hname: hostname,
        ltn: location,
        time: time,
        date: date
    });

    
   

    return(
        <section className="create-page">
            <h3 className="text-center mt-5">Event details</h3>


            <Form className="form-group">
                <FormGroup>
                    <Label htmlFor="eventname">Event Name</Label>
                        <Input type="text" id="eventname" name="eventname"
                            value={eventname} onChange={(e)=> setEventname(e.target.value)}
                        />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="hostname">Host Name</Label>
                    <Input type="text" id="hostname" name="hostname"
                        value={hostname} onChange={(e)=> setHostname(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <div className="row">
                        <div className="col-6">
                            <Label htmlFor="time">Time</Label>
                            <Input type="time" id="time" value={time} 
                                onChange={(e)=> setTime(e.target.value)}  name="time"
                            />
                        </div>

                        <div className="col-6">
                            <Label htmlFor="time">Date</Label>
                            <Input type="date" id="time" value={date} name="date"
                                onChange={(e)=> setDate(e.target.value)} 
                            />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="location">Location</Label>
                        <Input type="textarea" id="location" name="location" 
                            value={location} onChange={(e)=> setLocation(e.target.value)}
                        />
                </FormGroup>

                <FormGroup>
                    <Input type="checkbox"
                    />   Show photo
                </FormGroup>

                <div className="btn-container">
                    <Link to="/" type="submit" className="btn back">
                        Back
                    </Link>

                    <Link to="/event" type="submit" className="btn next">
                        Next
                    </Link>
                </div>
            </Form>
        </section>
    );
}

export default Create;