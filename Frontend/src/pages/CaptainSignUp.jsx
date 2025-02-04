import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainSignUp = () => {
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
      e.preventDefault()
      console.log(email, password)
      setUserData({
        fullName:{
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password

      })
      setEmail('')
      setPassword('') 
      setfirstName('')
      setlastName('')
    }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
     <div>
      <form onSubmit={submitHandler} >
        <img className='w-16 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg"  />
        <h3 className='text-xl mb-2  font-medium'>What's our Captain's name</h3>
          <div className='flex gap-2 '>
            <input
              required
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border-none w-1/2 text-lg placeholder:text-base'
              type="email"
              placeholder='First Name' />

              <input
              required
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border-none w-1/2 text-lg placeholder:text-base'
              type="email"
              placeholder='Last Name' />

          </div>
          <h3 className='text-xl mb-2  font-medium mt-6'>What's our Captain's email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 border-none w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@examle.com' />
          <h3 className='text-xl mb-2 mt-6 font-medium'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 border-none w-full text-lg placeholder:text-base'
            type="password"
            placeholder='password' />
          <button type='submit' className='bg-[#111] text-white rounded px-4 py-2 border-none w-full mt-6 font-medium'>SignUp</button>          
        </form>
        <p className='text-center mt-4 font-medium'>
            Already have a account ?
            <Link to={'/captain-login'} className='text-blue-500'> Login here</Link> 
          </p>
     </div>
     <div>
        <p className='text-[8px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='text-blue-500 underline'>Terms of Service apply.</span></p>     
    </div>
    </div>
  )
}

export default CaptainSignUp