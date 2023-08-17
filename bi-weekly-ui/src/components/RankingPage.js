import React, { useState, useEffect } from 'react'
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const RankingPage = () => {

    const [loading, setLoading] = useState(true);
    const [rankingDetails, setRankingDetails] = useState(null);

    const navigate = useNavigate();

    const medal = ['🥇','🥈','🥉']

    useEffect(() => {
        const fetchRanking = async () =>{
            setLoading(true);
            try{
                const response = await UserService.getRanking();
                setRankingDetails(response.data);
            }
            catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        fetchRanking();
      
    }, [])
    


  return (
    <div className="container mx-auto my-8">
        <div className="h-12">
            Ranking By Projects
        </div>
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-300">
                    <tr>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Username</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">No. of Projects</th>
                        <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Rank</th>
              
                    </tr>
                </thead>
                {!loading && (
                    <tbody className="bg-white">
                        {rankingDetails.map((rank, index) =>(
                            <tr key={rank.username}>
                                <td className="text-left px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                    {rank.firstname + " " + rank.lastname}
                                    </div>
                                </td>
                                <td className="text-left px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500 font-semibold">
                                    
                                    {rank.username}
                                    
                                    </div>
                                </td>
                                <td className="text-left px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500 ml-14">
                                    {rank.projectCount}
                                    </div>
                                </td>
                                <td className="text-center px-6 py-4 whitespace-nowrap font-medium text-sm space-x-4">
                                    <div className="text-sm text-gray-500">
                                        {index < medal.length ? medal[index] : index + 1}
                                        
                                    </div>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}

            </table>
            

        </div>
        <div className="h-12 pt-5 ">
            
            <button
            onClick={() => navigate("/home")}
            className="rounded bg-red-700 text-white px-6 py-2 ml-2 font-semibold hover:bg-red-500 hover:text-black">
              Back
            </button>
            
        </div>
    </div>
  )
}

export default RankingPage
