import React,{ useState } from 'react'

const LoginForm = () => {

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) =>{
    e.preventDefault();
    const value = e.target.value;
    setLoginDetails({...loginDetails, [e.target.name]: value});
  }

  const handleSubmit = () =>{
    console.log(loginDetails.username, loginDetails.password);
  }



  return (
    <div className="flex max-w-2xl mx-auto mt-20 shadow border border-gray-900">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Login</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Username</label>
                <input
                type="text"
                name="username"
                value={loginDetails.username}
                onChange={handleChange}
                className="h-10 w-96 border mt-2 px-2 py-2" />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Password</label>
                <input
                type="password"
                name="password"
                value={loginDetails.password}
                onChange={handleChange}
                className="h-10 w-96 border mt-2 px-2 py-2" />
            </div>
            <div className="items-center justify-start h-14 w-full my-4 space-x-4 pt-4">
            <button className="rounded text-white font-semibold bg-green-700 hover:bg-green-500 py-2 px-6" onClick={handleSubmit}>
                    Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm
