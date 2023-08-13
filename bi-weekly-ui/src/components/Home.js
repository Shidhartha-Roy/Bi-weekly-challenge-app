import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ChallengeService from '../services/ChallengeService'


const Home = () => {

    
    const username = Cookies.get('uname');
    const [status, setStatus] = useState("Fetching status....");

    const [challenges, setChallenges] = useState([
        {
            id: "",
            pname: "",
            pdesc:"",
            startDate: "",
            endDate : "",
            username: "",
        }
    ]);
    

    //!This is bound to change when backend integration is done
    // const [date, setDate] = useState({
    //     sdate: "2023-08-01",
    //     edate: "2023-08-12",
    // })

    //!Some changes here to after integration
    useEffect(() => {
        //*Direct path access
        const token = Cookies.get('authToken');
        
        if(!token){
            navigate("/login");
        }
    }, [])
     
    useEffect(() => {
        //*Fetching Challenge data
        const fetchData = async () =>{
            setLoading(true);
            try{
                const response = await ChallengeService.getChallenges(username);
                const chal = [];
                for(let key in response.data){
                    chal.push({...response.data[key], id: key});
                }
                // setChallenges(response.data);
                // console.log(response.data);
                // console.log(challenges)
                chal.map(challenge => {
                    setChallenges({
                        pname: challenge.pname,
                        pdesc: challenge.pdesc,
                        startDate: challenge.startDate,
                        endDate: challenge.endDate ,
                        username: challenge.username, 

                    })
                })

            }
            catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [])
        
    // useEffect(() => {
    //     //*Date Side Effects
    //     const currentDate = new Date().toISOString().split('T')[0];
    //     if(challenges.startDate < currentDate && challenges.endDate > currentDate){
    //         setStatus("Ongoing")
    //         console.log(challenges.startDate)
    //     }
    //     else if(currentDate > challenges.endDate){
    //         setStatus("Completed")
    //     }
    //     else if(currentDate === challenges.endDate){
    //         setStatus("Last Ride")
    //     }
    //     else if(currentDate < challenges.startDate){
    //         setStatus("Upcoming")
    //     }
    // }, [])
    

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();
  return (
    <div className="container mx-auto my-8">
        <div className="h-12">
            List of Challenges
      </div>
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr>
                        {/* <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Project ID</th> */}
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Project Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Project Description</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Start Date</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">End Date</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Status</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Actions</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className="bg-white">
                        <tr 
                        onClick={() => navigate("/events")}
                        className="cursor-pointer">
                            {/* <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    1
                                </div>
                            </td> */}
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    {challenges.pname}
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    {challenges.pdesc}
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    {challenges.startDate}
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                {challenges.endDate}
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm ">
                                    <span style={{color: status === 'Completed' ? 'green' : 'orange' ,  border: "1px solid" }} className="rounded p-1">
                                        {status}
                                    </span>
                                </div>
                            </td>
                            <td className="text-center font-semibold">
                                <button className="bg-red-700 hover:bg-red-500 text-white hover:text-black px-4 py-2 rounded">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                )}
            </table>
        </div>





        <div className="h-12 pt-5">
            <button
            onClick={() => navigate("/create")}
            className="rounded bg-green-700 text-white px-6 py-2 font-semibold hover:bg-green-500 hover:text-black"
            >
                Create New Project
            </button>
        </div>
      
    </div>
  )
}

export default Home
