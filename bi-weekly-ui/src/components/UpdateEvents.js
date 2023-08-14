import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Selection from 'react-select';


const UpdateEvent = () => {
    const navigate = useNavigate();

    const [eventDetails, setEventDetails] = useState({
        eventname: "",
        date: "",
        edesc: "",
        
    })

    const handleChange = (e) =>{
        const value = e.target.value;
        setEventDetails({...eventDetails, [e.target.name]: value})
        
    }
    
    //!Changes are bound to happen
    const handleSubmit = () =>{
        console.log(eventDetails.eventname,eventDetails.edesc,eventDetails.date)
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
            <h1>Update Event</h1>
        </div>
        {/* Event Name Field */}
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Event Name</label>
            <input
            type="text"
            name="eventname"
            value={eventDetails.eventname}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border border-gray-500 mt-2 px-2 py-2"
            />
        </div>
        {/* Starting Date Field */}
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Event Date</label>
            <input
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border border-gray-500 mt-2 px-2 py-2"
            />
        </div>
        {/* Project Status Field */}
        <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-normal pt-2 pb-2">Event Status</label>
        <Selection
                className="border border-gray-500 rounded"
                options={eventStatusList}
                 />
        </div>
        

        <div className="items-center justify-start h-14 w-full space-x-4 pt-14 pb-5">
            <button className="rounded text-white font-semibold bg-green-700 hover:bg-green-500 hover:text-black py-2 px-6" onClick={handleSubmit}>
                Update
            </button>
            <button className="rounded text-white font-semibold bg-red-700 hover:bg-red-500 hover:text-black py-2 px-6" onClick={() => navigate("/events")}>
                Back
            </button>
        </div>
        </div>
    </div>
  )
}

export default UpdateEvent
