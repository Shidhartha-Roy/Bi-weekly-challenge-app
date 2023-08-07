import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
          <p 
          onClick={() => navigate("/home")}
          className="text-white font-bold cursor-pointer">The Bi Weekly Challenge</p>
      </div>
    </div>
  )
}

export default Nav
