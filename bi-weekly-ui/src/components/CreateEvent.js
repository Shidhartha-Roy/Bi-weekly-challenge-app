import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Selection from 'react-select';
import EventService from '../services/EventService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateEvent = () => {
    const navigate = useNavigate();

    const { chId,pname } = useParams();

    const currentDate = new Date().toISOString().split('T')[0];

    const [eventDetails, setEventDetails] = useState({
        challengeId: chId,
        eventName: "",
        eventDate: currentDate,
        eventStatus: "",
        
    })

    const handleChange = (e) =>{
        const value = e.target.value;
        setEventDetails({ ...eventDetails, [e.target.name]: value})
        
    }

    const handleSelection = (name, value) =>{
        setEventDetails({ ...eventDetails, [name]: value})
    }
    
    const handleSubmit = () =>{
        EventService.createEvent(eventDetails)
        .then(() => {
            
                toast("Event Created!", {
                    autoClose: 1000,
                });
    
                setTimeout(() => {
                    navigate(`/events/${chId}/${pname}`)
                }, 2000);
                
    
            
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
      //*Direct Path Access
      const token = Cookies.get('authToken');
      if(!token){
          navigate("/login");
      }
    }, [])
    
    const eventStatusList = [
        { value:"Completed", label:"Completed"},
        { value:"Ongoing", label:"Ongoing"},
        { value:"Upcoming", label:"Upcoming"},
      ]
      
    



  return (
    <div className="flex max-w-2xl mx-auto mt-20 shadow border border-gray-900 pb-2">
        <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
            <h1>Create Event</h1>
        </div>
        {/* Event Name Field */}
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Event Name</label>
            <input
            type="text"
            name="eventName"
            value={eventDetails.eventName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border border-gray-500 mt-2 px-2 py-2 rounded"
            />
        </div>
        {/* Starting Date Field */}
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Event Date</label>
            <input
            type="date"
            name="eventDate"
            value={eventDetails.eventDate}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border border-gray-500 mt-2 px-2 py-2 rounded"
            />
        </div>
        {/* Project Status Field */}
        <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-normal pt-2 pb-2">Event Status</label>
           <Selection
                className="border border-gray-500 rounded"
                onChange={(selectedOption) => handleSelection("eventStatus", selectedOption.value)}
                options={eventStatusList}
                
                 />
        </div>
        

        <div className="items-center justify-start h-14 w-full space-x-4 pt-14 pb-5">
            <ToastContainer />
            <button className="rounded text-white font-semibold bg-green-700 hover:bg-green-500 hover:text-black py-2 px-6" onClick={handleSubmit}>
                Create
            </button>
            <button className="rounded text-white font-semibold bg-red-700 hover:bg-red-500 hover:text-black py-2 px-6" onClick={() => navigate("/events")}>
                Back
            </button>
        </div>
        </div>
    </div>
  )
}

export default CreateEvent
