import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {

  const [validate, setValidate] = useState({
    confirmPassword: "",
  })

  const [registerDetails, setRegisterDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  })

  const handleChange = (e) =>{
    e.preventDefault();
    const value = e.target.value;
    setRegisterDetails({...registerDetails, [e.target.name]: value});
    setValidate({...validate, [e.target.name]: value});

  }
  return (
    <div className="flex max-w-2xl mx-auto mt-20 shadow border border-gray-900">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Register</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">First Name</label>
                <input
                type="text"
                name="firstname"
                value={registerDetails.firstname}
                onChange={handleChange}
                className="h-10 w-96 border mt-2 px-2 py-2" />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                <input
                type="text"
                name="lastname"
                value={registerDetails.lastname}
                onChange={handleChange}
                className="h-10 w-96 border mt-2 px-2 py-2" />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Select Username</label>
                <input
                type="text"
                name="username"
                value={registerDetails.username}
                onChange={handleChange}
                className="h-10 w-96 border mt-2 px-2 py-2" />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Select Password</label>
                <input
                type="password"
                name="password"
                value={registerDetails.password}
                onChange={handleChange}
                className="h-10 w-96 border mt-2 px-2 py-2" />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Confirm Password</label>
                <input
                type="password"
                name="confirmPassword"
                className="h-10 w-96 border mt-2 px-2 py-2"
                value={validate.confirmPassword}
                onChange={handleChange} />
                {registerDetails.password !== validate.confirmPassword && (
                  <div className="text-red-600 flex justify-start ">*Passwords do not Match</div>
                )}
            </div>
            <div className="items-center justify-start h-14 w-full my-4 mt-10 space-x-4 pt-4">
            <button className="rounded text-white font-semibold bg-green-700 hover:bg-green-500 py-2 px-6">
                    Register
                </button>
            </div>
            <div>Already Registered? <NavLink to="/login" className="text-blue-900">Log In</NavLink></div>
        </div>
    </div>
  )
}

export default Register
