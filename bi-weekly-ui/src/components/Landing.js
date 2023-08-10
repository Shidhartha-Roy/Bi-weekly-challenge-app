import React from 'react'
import { useNavigate } from 'react-router-dom'
import land from '../images/OIG-removebg-preview.png'

const Landing = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-36">

      <div className="text-5xl font-semibold font-mono tracking-wider flex justify-start">
        Hello Hacker😎,<br />
        Ready for the Challenge?
        <img src={land} className="-mt-16" />
      </div>
      <div className="-ml-96 -mt-72">
        <button 
        onClick={() => navigate("/login")}
        className=" bg-blue-400 hover:bg-blue-600 mr-96 px-6 py-3 rounded text-2xl font-bold text-white hover:text-black w-52">Login</button>
      </div>
    </div>
  )
}

export default Landing
