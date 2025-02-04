import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email, password)
    setUserData({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('') 
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
     <div>
      <form onSubmit={submitHandler} >
        <img className='w-16 mb-10' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png"  />

          <h3 className='text-xl mb-2  font-medium'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@examle.com' />
          <h3 className='text-xl mb-2 mt-6 font-medium'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='password' />
          <button type='submit' className='bg-[#111] text-white rounded px-4 py-2 border w-full mt-6 font-medium'>Login</button>          
        </form>
        <p className='text-center mt-4 font-medium'>
            New here ?
            <Link to={'/signup'} className='text-blue-500'> Create new Account</Link> 
          </p>
     </div>
     <div>
      <Link to={'/captain-login'} className='bg-[#10b461] text-white rounded px-4 py-2 border w-full mt-6 font-medium flex justify-center'>Sign in as captain</Link>
     </div>
    </div>
  )
}

export default UserLogin