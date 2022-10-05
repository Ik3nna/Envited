import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row, Form } from "react-bootstrap";
import { useGlobalContext } from "./context";

const Create = ()=> {
    const [validated, setValidated] = useState(false);
    const [eventname,setEventname] = useState("");
    const [hostname,setHostname] = useState("");
    const [location,setLocation] = useState("");
    const [time,setTime] = useState("");
    const [date,setDate] = useState("");
    const [agree,setAgree] = useState(false)
    const [list,setList] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setValidated(true);
       
        // const newList = {
        //     en: eventname,
        //     hn: hostname,
        //     ln: location,
        //     tm: time,
        //     dt: date
        // }
    }



    return(
        <section className="create-page">
            <h3 className="text-center event-header">Event details</h3>

            <Form className="form-group" noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Event name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Event name"
                            value = {eventname}
                            onChange = {(e)=>setEventname(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                        <Form.Label>Host name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Host name"
                            value = {hostname}
                            onChange = {(e)=>setHostname(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Please add a Host name</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xs="6" controlId="validationCustom03">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            required
                            type="time"
                            value = {time}
                            onChange = {(e)=>setTime(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} xs="6" controlId="validationCustom04">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            value = {date}
                            onChange = {(e)=>setDate(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Location"
                            value = {location}
                            onChange = {(e)=>setLocation(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Show Photo"
                        feedback="You must check the box before submitting."
                        feedbackType="invalid"
                        value = {agree}
                        onChange = {(e)=>setAgree(e.target.checked)}
                    />
                </Form.Group>

                <Button type="submit" className="btn">
                    Submit
                </Button>
            </Form>
        </section>
    );
}

export default Create;