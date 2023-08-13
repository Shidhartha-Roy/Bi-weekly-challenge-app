import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ChallengeList = ({challenge}) => {
    const navigate = useNavigate();
    const [status, setStatus] = useState("Fetching status....");

    useEffect(() => {
        const statusValue = (sdate, edate) =>{
            const currentDate = new Date().toISOString().split('T')[0];
            var a = 1;
            if(sdate <= currentDate && edate > currentDate){
                setStatus("Ongoing")
            }
            else if(currentDate > edate){
                setStatus("Completed")
            }
            else if(currentDate === edate){
                setStatus("Last Ride")
            }
            else if(currentDate < sdate){
                setStatus("Upcoming")
            }
        }
        statusValue(challenge.startDate, challenge.endDate);
       
    }, [challenge.startDate, challenge.endDate]);




  return (
    <tr key={challenge.id}
                        onClick={() => navigate("/events")}
                        className="cursor-pointer">
                            
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    {challenge.pname}
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    {challenge.pdesc}
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                    {challenge.startDate}
                                </div>
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap font-semibold">
                                <div className="text-sm text-gray-500">
                                {challenge.endDate}
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
  )
}

export default ChallengeList
