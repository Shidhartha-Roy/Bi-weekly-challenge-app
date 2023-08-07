import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateChallenge = () => {

    const navigate = useNavigate();

    const currentDate = new Date().toISOString().split('T')[0];

    //End date Calculation function
    const calculateEndDate = (startDate) =>{
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 14);
        const formattedEndDate = endDate.toISOString().split('T')[0];
        setChallengeDetails({...challengeDetails, edate: formattedEndDate});
      }

    const [challengeDetails, setChallengeDetails] = useState({
        projectname: "",
        sdate: currentDate,
        pdesc: "",
        edate: "",
    })

    const handleChange = (e) =>{
        const value = e.target.value;
        setChallengeDetails({...challengeDetails, [e.target.name]: value})
        
    }

    //!Changes are bound to happen
    const handleSubmit = () =>{
        console.log(challengeDetails.projectname,challengeDetails.pdesc,challengeDetails.sdate,challengeDetails.edate)
    }


    useEffect(() => {

        calculateEndDate(new Date(challengeDetails.sdate));

    }, [challengeDetails.sdate]) //This runs the effect whenever sdate changes
    



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
            name="projectname"
            value={challengeDetails.projectname}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border border-gray-500 mt-2 px-2 py-2"
            />
        </div>
        {/* Starting Date Field */}
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Starting Date</label>
            <input
            type="date"
            name="sdate"
            value={challengeDetails.sdate}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border border-gray-500 mt-2 px-2 py-2"
            />
        </div>
        {/* Project Description Field */}
        <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-normal">Project Description</label>
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
            name="edate"
            className="h-10 w-96 border border-gray-500 px-2 py-2"
            value={challengeDetails.edate}
            onChange={(e) => handleChange(e)}
            readOnly
            />
        </div>
        <div className="items-center justify-start h-14 w-full space-x-4 pt-4">
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
