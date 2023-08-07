import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-36">

      <div className="text-5xl font-semibold font-mono tracking-wider">
        Hello Hacker😎,
        Ready for the Challenge?
      </div>
      <div>
        <button 
        onClick={() => navigate("/login")}
        className="mt-28 bg-blue-400 hover:bg-blue-600 mr-20 px-6 py-3 rounded text-2xl font-bold text-white hover:text-black w-52">Login</button>
      </div>
    </div>
  )
}

export default Landing
