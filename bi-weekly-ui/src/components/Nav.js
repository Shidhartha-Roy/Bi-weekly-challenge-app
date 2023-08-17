import Cookies from 'js-cookie';
import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Nav = () => {
  const navigate = useNavigate();

  const [logoutMessage, setLogoutMessage] = useState("")

  useEffect(() => {
    const token = Cookies.get('authToken');
    if(token){
      setLogoutMessage("LOGOUT")
    }
  }, [])

  const handleLogout = () =>{
    const conf = window.confirm("Do you really want to logout?")
    if(conf){
      Cookies.remove('authToken');
      axios.defaults.headers.common['Authorization'] = "";
      navigate("/")
      window.location.reload("false")

    }
    
  }

  
  return (
  <nav className="sticky top-0">
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
          <p 
          onClick={() => navigate("/home")}
          className="text-green-400 font-bold cursor-pointer">The Bi Weekly Challenge</p>
          <p
          className="font-bold text-green-400 cursor-pointer mr-2 uppercase"
          style={{marginLeft: "63rem"}}
          onClick={() => navigate("/rank")}>
           Check Ranking
          </p>
          <p
          className="font-bold text-red-400 cursor-pointer ml-2"
          
          onClick={handleLogout}>
           {logoutMessage}
          </p>
      </div>
    </div>
      </nav>
  )
}

export default Nav
