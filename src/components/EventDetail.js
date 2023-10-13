import React from 'react';
import './EventDetail.css';

function EventDetailsWithMap() {
    return (
        <div className="event-container">
            <div className="event-details">
                {/* Event Details Go Here */}
                <h2>Event Title</h2>
                <p>Date: {new Date().toDateString()}</p>
                <p>Location: University Campus</p>
                <p>Description: Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="map">
                {/* Google Map Embedding Goes Here */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.3052589672157!2d77.98947207570342!3d27.209564247270084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747766625cce3f%3A0x9eb5b271353779a9!2sInstitute%20of%20Engineering%20%26%20Technology%2C%20Khandari%2C%20Agra!5e0!3m2!1sen!2sin!4v1697138409391!5m2!1sen!2sin"
                    style={{ border: "0", height: "auto", width: "auto", position: "absolute"}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                > </iframe>
            </div>
        </div>
    );
}

export default EventDetailsWithMap;
