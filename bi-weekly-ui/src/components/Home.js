import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Home = () => {

    const [status, setStatus] = useState("Fetching status....")
    

    //!This is bound to change when backend integration is done
    const [date, setDate] = useState({
        sdate: "2023-08-01",
        edate: "2023-08-12",
    })

    //!Some changes here to after integration
    useEffect(() => {
        //*Direct path access
        const token = Cookies.get('authToken');
        if(!token){
            navigate("/login");
        }

        //*Date Side Effects
        const currentDate = new Date().toISOString().split('T')[0];
        if(date.sdate < currentDate && date.edate > currentDate){
            setStatus("Ongoing")
        }
        else if(currentDate > date.edate){
            setStatus("Completed")
        }
        else if(currentDate === date.edate){
            setStatus("Last Ride")
        }
        else if(currentDate < date.sdate){
            setStatus("Upcoming")
        }
    }, [])
    

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
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Project ID</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Project Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Project Description</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Start Date</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">End Date</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Status</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Actions</th>
                    </tr>
                </thead>
                {loading && (
                    <tbody className="bg-white">
                        <tr 
                        onClick={() => navigate("/events")}
                        className="cursor-pointer">
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    1
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    Something
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    Hallo Hallo 
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    {date.sdate}
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    {date.edate}
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
