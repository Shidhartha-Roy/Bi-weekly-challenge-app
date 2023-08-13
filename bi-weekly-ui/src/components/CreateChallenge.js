import React,{ useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import ChallengeService from '../services/ChallengeService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateChallenge = () => {

    const id = Cookies.get('uname');

    const navigate = useNavigate();


    const currentDate = new Date().toISOString().split('T')[0];

    //End date Calculation function
    const calculateEndDate = (startDate) =>{
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 14);
        const formattedEndDate = endDate.toISOString().split('T')[0];
        setChallengeDetails({...challengeDetails, endDate: formattedEndDate});
      }

    const [challengeDetails, setChallengeDetails] = useState({
        pname: "",
        pdesc: "",
        startDate: currentDate,
        endDate: "",
        username: id,
    })

    const handleChange = (e) =>{
        const value = e.target.value;
        setChallengeDetails({...challengeDetails, [e.target.name]: value})
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        ChallengeService.createChallenge(challengeDetails)
        .then(() => {
            toast("Challenge Accepted!");

            setTimeout(() => {
                navigate("/home")
            }, 6000);
            

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

        //*End Date Function Call
        calculateEndDate(new Date(challengeDetails.startDate));

    }, [challengeDetails.startDate]) //This runs the effect whenever startDate changes
    



  return (
    <div className="flex max-w-2xl mx-auto mt-20 shadow border border-gray-900 pb-2">
        <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
            <h1>Create Challange</h1>
        </div>
        {/* Project Name Field */}
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Project Name</label>
            <input
            type="text"
            name="pname"
            value={challengeDetails.pname}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border border-gray-500 mt-2 px-2 py-2"
            />
        </div>
        {/* Starting Date Field */}
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Starting Date</label>
            <input
            type="date"
            name="startDate"
            value={challengeDetails.startDate}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border border-gray-500 mt-2 px-2 py-2"
            />
        </div>
        {/* Project Description Field */}
        <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-normal">Tech Stack Used</label>
            <textarea
            className="h-20 resize-none w-96 border border-gray-500 mt-2 px-2 py-2"
            name="pdesc"
            value={challengeDetails.pdesc}
            onChange={(e) => handleChange(e)}
            
            />
        </div>
        {/* Ending Date Field */}
        <div className="items-center justify-center h-14 mt-16 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">End Date</label>
            <input
            type="date"
            name="endDate"
            className="h-10 w-96 border border-gray-500 px-2 py-2"
            value={challengeDetails.endDate}
            onChange={(e) => handleChange(e)}
            readOnly
            />
        </div>
        <div className="items-center justify-start h-14 w-full space-x-4 pt-4">
            
            <ToastContainer />
            <button className="rounded text-white font-semibold bg-green-700 hover:bg-green-500 hover:text-black py-2 px-6" onClick={handleSubmit}>
                Create
            </button>
            
            <button className="rounded text-white font-semibold bg-red-700 hover:bg-red-500 hover:text-black py-2 px-6" onClick={() => navigate("/home")}>
                Back
            </button>
        </div>

        </div>
    </div>
  )
}

export default CreateChallenge
