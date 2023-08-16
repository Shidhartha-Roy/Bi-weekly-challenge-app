import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ChallengeService from '../services/ChallengeService'
import ChallengeList from './ChallengeList'


const Home = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [challenges, setChallenges] = useState(null);
    
    const username = Cookies.get('uname');

    //Delete challenge Function
    const deleteChallenge = (e, id) =>{
        e.preventDefault();
        ChallengeService.deleteChallenge(id)
        .then((response) =>{
            if(challenges){
                setChallenges((prevElement) => {
                    return prevElement.filter((challenge) => challenge.id != id)
                })
            }
        })
    }




    //Side Effect to prevent Direct path Access
    useEffect(() => {
        const token = Cookies.get('authToken');
        
        if(!token){
            navigate("/login");
        }
    }, [])
     
    //Side Effect for fetching user specific challenge data
    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try{
                const response = await ChallengeService.getChallenges(username);
                setChallenges(response.data);
            }
            catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [])
        

  return (
    <div className="container mx-auto my-8">
        <div className="h-12">
            List of Challenges
      </div>
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr>
                        
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Project Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Tech Stack</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Start Date</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">End Date</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking wider py-3 px-6">Status</th>
                        <th className="text-center font-medium text-gray-500 uppercase tracking wider py-3 px-6">Actions</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className="bg-white">
                        {challenges.map((challenge) => (
                            <ChallengeList challenge={challenge} deleteChallenge={deleteChallenge} key={challenge.id} />
                        ))}
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
