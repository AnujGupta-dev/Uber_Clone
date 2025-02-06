import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainSignUp = () => {
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [ vehicleColor, setVehicleColor ] = useState('')
    const [ vehiclePlate, setVehiclePlate ] = useState('')
    const [ vehicleCapacity, setVehicleCapacity ] = useState('')
    const [ vehicleType, setVehicleType ] = useState('')

    const  navigate = useNavigate();

    const {captain , setcaptain} = useContext(CaptainDataContext)

    const submitHandler = async (e) => {
      e.preventDefault()
      console.log(email, password)
      
      const captainData = {
        fullname: {
          firstname: firstName,
          lastname: lastName
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }       
      }        

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

      if (response.status === 201) {
        const data = response.data
        setcaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }

      setEmail('')
      setPassword('') 
      setfirstName('')
      setlastName('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
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
              type="text"
              placeholder='First Name' />

              <input
              required
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border-none w-1/2 text-lg placeholder:text-base'
              type="text"
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
            <h3 className='text-lg font-medium mb-2 mt-6'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              max='8'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option className='text-sm' value="" disabled>Select Vehicle Type</option>
              <option className='text-sm' value="car">Car</option>
              <option className='text-sm' value="auto">Auto</option>
              <option className='text-sm' value="moto">Moto</option>
            </select>
          </div>
          <button type='submit' className='bg-[#111] text-white rounded px-4 py-2 border-none w-full mt-6 font-medium'>Create Captain Account</button>          
        </form>
        <p className='text-center mt-4 font-medium'>
            Already have a account ?
            <Link to={'/captain-login'} className='text-blue-500'> Login here </Link> 
          </p>
     </div>
     <div className='p-2 m-2 pb-8'>
        <p className='text-[8px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='text-blue-500 underline'>Terms of Service apply.</span></p>     
    </div>
    </div>
  )
}

export default CaptainSignUp