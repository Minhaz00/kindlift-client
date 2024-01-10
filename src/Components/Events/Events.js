import React, { useEffect, useState } from "react";
import './Events.css'
import { Button, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Event from "./Event";
import { useLoaderData } from "react-router-dom";

const Events = () => {

    const events = useLoaderData();

    const [query, setQuery] = useState("");
    const [query2, setQuery2] = useState("name");
    const filteredEvents = events.filter((item) => {
        return item.department.toLowerCase().includes(query.toLowerCase());
    });


    return (
        <div>
            <div className="container">
            {/* <h5 className="text-center pt-3">Upcomming Events</h5> */}
            <div>
                
                <form className="d-flex mt-4 mb-4 controls ps-0">
                    <input
                        className="mx-auto"
                        placeholder="Search events"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        type="search"
                    />
                    {/* <Button variant="outline-dark"><FaSearch/></Button> */}
                </form>
            </div>
            
            <div className="events pb-5">
                {filteredEvents.map((event) => (
                <Event key={event.eventId} event={event}></Event>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Events;