import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Selection from 'react-select';
import EventService from '../services/EventService';


const UpdateEvent = () => {
    const navigate = useNavigate();
    const chid = Cookies.get('chId');
    const pname = Cookies.get('project');

    const { eid } = useParams();

    const [eventDetails, setEventDetails] = useState({
        id: eid,
        challengeId: chid,
        eventName: "",
        eventDate: "",
        eventStatus: "",
        
    })

    const handleSelection = (name, value) =>{
        setEventDetails({ ...eventDetails, [name]: value})
    }

    const handleChange = (e) =>{
        const value = e.target.value;
        setEventDetails({...eventDetails, [e.target.name]: value})
        
    }
    
    //!Changes are bound to happen
    const handleSubmit = (e) =>{
        e.preventDefault();
        EventService.updateEvent(eventDetails, eid)
        .then((response) => {
            navigate(`/events/${chid}/${pname}`)
        })
        .catch((error) => {
            console.log(error);
        })
        
    }

    useEffect(() => {
      //*Direct Path Access
      const token = Cookies.get('authToken');
      if(!token){
          navigate("/login");
      }
    }, [])

    useEffect(() => {
      const fetchEvent = async () =>{
        try{
            const response = await EventService.getEventById(eid);
            setEventDetails(response.data);

        }
        catch(error){
            console.log(error);
        }
      }
      fetchEvent();
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
            value={eventDetails.eventName}
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
            value={eventDetails.eventDate}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border border-gray-500 mt-2 px-2 py-2"
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
            <button className="rounded text-white font-semibold bg-green-700 hover:bg-green-500 hover:text-black py-2 px-6" onClick={(e)=> handleSubmit(e)}>
                Update
            </button>
            <button className="rounded text-white font-semibold bg-red-700 hover:bg-red-500 hover:text-black py-2 px-6" onClick={() => navigate(`/events/${chid}/${pname}`)}>
                Back
            </button>
        </div>
        </div>
    </div>
  )
}

export default UpdateEvent
