import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';


const ProjectEvents = () => {

  const navigate = useNavigate();

    const [lodaing, setLodaing] = useState(true)
    const [status, setStatus] = useState("Completed");

  useEffect(() => {
    //*Direct Path Access
    const token = Cookies.get('authToken');
    if(!token){
        navigate("/login");
    }
  }, [])

 

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        Events of [Project Name]
      </div>

      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Event Name</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Event Status</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Event Date</th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
              
            </tr>
          </thead>
          {lodaing && (
            <tbody className="bg-white">
              <tr>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      Making
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 font-semibold">
                    <span style={{color: status === 'Completed' ? 'green' : 'orange' ,  border: "1px solid" }} className="rounded p-1">
                       {status}
                    </span>
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      Making
                    </div>
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap font-medium text-sm space-x-4">
                        
                        <button 
                        // onClick={(e) => editEmployee(e, employee.id)}
                        //!Just for testing the below code
                        onClick={() => navigate("/update")}

                        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 hover:text-black">Edit</button>
                        <button
                        // onClick={(e) => deleteEmployee(e, employee.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 hover:text-black">Delete</button>
                    </td>

              </tr>
            </tbody>
          )}
        </table>

      </div>

      <div className="h-12 pt-5 ">
            <button
            onClick={() => navigate("/createEvents")}
            className="rounded bg-green-700  text-white px-6 py-2 font-semibold hover:bg-green-500 hover:text-black"
            >
               Add New Event
            </button>
            <button
            onClick={() => navigate("/home")}
            className="rounded bg-red-700 text-white px-6 py-2 ml-2 font-semibold hover:bg-red-500 hover:text-black">
              Back
            </button>
        </div>
      
    </div>
  )
}

export default ProjectEvents
