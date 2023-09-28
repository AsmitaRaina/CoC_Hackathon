import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Create = () => {
    

    const [date, setDate] = useState([]);
    const[dateformat,setDateformat]=useState('');
    const [organiser, setorganiser] = useState('');
    const [venue, setVenue] = useState('');
    const [start_time, setstarttime] = useState('');
    const [end_time, setendtime] = useState('');
    const [description, setdescription] = useState('');
    
   


    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {date,organiser,venue,start_time,end_time,description};
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'Post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/events');
        })

    }  

    return (  
        <div className="create">
            <h2>Add a Event</h2>
            <form onSubmit={handleSubmit}>
                <label>Event Date</label>
                <input 
                type="date"  
                required
                placeholder="dd-mm-yyyy"
                onChange = {(e) => setDate(e.target.value)}
                />
                <label>Event Venue</label>
                <input 
                type="text"  
                required
                value = {venue}
                onChange = {(e) => setVenue(e.target.value)}
                />

                <label>Start Time</label>
                <input 
                type="time"
                required
                value = {start_time}
                onChange = {(e) => setstarttime(e.target.value)}
                />

                <label>End Time</label>
                <input 
                type="time"  
                required
                
                onChange = {(e) => setendtime(e.target.value)}
                />

                <label >Event Description:</label>
                <textarea 
                required
                value={description}
                onChange = {(e) => setdescription(e.target.value)}
                ></textarea>
                <label>Organiser:</label>
                <select
                    value = {organiser}
                    onChange = {(e) => setorganiser(e.target.value)}
                >
                    <option value="Hostel">Hostel</option>
                    
                    
                </select>
                {!isPending && <button>Add Event</button>}
                {isPending && <button disabled>Adding Event....</button>}
                
            </form>
        </div>
    );
}
 
export default Create;

