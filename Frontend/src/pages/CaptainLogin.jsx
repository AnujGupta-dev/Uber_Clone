import React, { useState ,useContext} from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {captain , setcaptain} = useContext(CaptainDataContext)

  const  navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault()
  
   const captainData = {
      email: email,
      password: password
    }

    const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

    if (response.status === 200) {
      const data = response.data
      setcaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
    else{
      console.log(response)
    }

    setEmail('')
    setPassword('') 

  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
     <div>
      <form onSubmit={submitHandler} >
        <img className='w-16 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg"  />

          <h3 className='text-xl mb-2  font-medium'>What's our Captain's email</h3>
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
           Join a fleet ?
            <Link to={'/captain-signup'} className='text-blue-500'> Register as captain</Link> 
          </p>
     </div>
     <div>
      <Link to={'/login'} className='bg-[#d5622d] text-white rounded px-4 py-2 border w-full mt-6 font-medium flex justify-center'>Sign in as user</Link>
     </div>
    </div>
  )
}

export default CaptainLogin