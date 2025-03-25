import React, { useRef, useState ,useContext, useEffect} from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../Components/LocationSearchPanel';
import VehiclePanel from '../Components/VehiclePanel';
import ConfirmRide from '../Components/ConfirmRide';
import WaitingForDriver from '../Components/WaitingForDriver';
import LookingForDriver from '../Components/LookingForDriver';
import axios from 'axios'
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../Components/LiveTracking';


const UserHome = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloserref = useRef(null)
  const [vehiclePannelOpen, setVehiclePannelOpen] = useState(false)
  const vehiclePannelref = useRef(null)
  const confirmRideref = useRef(null)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [waitingForDriver, setwaitingForDriver] = useState(false)
  const [activeState, setActiveState] = useState(null)
  const [pickupSuggestions, setPickupSuggestions] = useState([])
  const [destinationSuggestions, setDestinationSuggestions] = useState([])
  const [fare, setFare] = useState(null)
  const [vehicleType, setVehicleType] = useState(null)
  const [ride, setride] = useState(null)
  const navigate = useNavigate()

  const { socket } = useContext(SocketContext)
  const { user } = useContext(UserDataContext)
  const [map, setmap] = useState(true)

  useEffect(() => { 
    socket.emit("join",{userType:"user" , userId: user._id})
  },[user])

  socket.on('ride-confirmed' , ride => {
    setride(ride)
    setConfirmRidePanel(false)
    setwaitingForDriver(true)
    setvehicleFound(false)
  }
  )


  const submitHandler = (e) => {
    e.preventDefault()
  }

  socket.on('ride-started' , ride => {
    setwaitingForDriver(false)
    navigate('/riding',{state:{ride:ride}})
  }
  )

  const handlePickupChange = async (e) => {
    setPickup(e.target.value)

    if(e.target.value.length > 3)
    {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
  
        })
        setPickupSuggestions(response.data)
      } catch {
       console.log("Error while fetching pickup suggestions")
      }
    }
  }

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value)

    if(e.target.value.length > 3)
    {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        setDestinationSuggestions(response.data)
      } catch {
        console.log("Error while fetching destination suggestions")
      }
    }
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
      })
      gsap.to(panelCloserref.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
      })
      gsap.to(panelCloserref.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(() => {
    if (vehiclePannelOpen) {
      gsap.to(vehiclePannelref.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePannelref.current, {
        transform: 'translateY(100%)'
      })
    }

  }, [vehiclePannelOpen])

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRideref.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRideref.current, {
        transform: 'translateY(100%)'
      })
    }

  }, [confirmRidePanel])

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }

  }, [vehicleFound])

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }

  }, [waitingForDriver])


  const findTrip = async () => {
    setVehiclePannelOpen(true)
    setpanelOpen(false)
    setmap(true)
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/fare`, {
        params: { pickup: pickup, destination: destination },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setFare(response.data)
    } catch {
      console.log("Error while fetching fare")
    }
  }

  const createRide = async () => {
    console.log(vehicleType , pickup , destination) 
    try {
     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
        pickup: pickup,
        destination: destination,
        vehicleType: vehicleType
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(response.data)
    } catch {
      console.log("Error while creating ride")
    }
  }

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png" />

      <div className={`h-[65%] w-screen  ${map ? 'block' : 'hidden'}`} >
        {/* temp image */}
        <LiveTracking/>
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full  '>
        <div className='h-[35%] bg-white p-5 relative'>
          <h5 ref={panelCloserref}
            onClick={() => {setpanelOpen(false) 
                            setmap(true)}
            }
            className='absolute opacity-0 top-6 right-6 text-2xl'>
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className='text-2xl font-semibold '>Find a trip</h4>
          <form onSubmit={(e) => submitHandler()}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {setpanelOpen(true)
                              setActiveState('pickup')
                              setmap(false)
              }}
              value={pickup}
              onChange={handlePickupChange}
              className=' bg-[#eee] px-12 text-base py-2 rounded-lg mt-5 w-full ' type="text" placeholder='Add a pick-up location' />
            <input
              onClick={() => {setpanelOpen(true)
                              setActiveState('destination')
                              setmap(false)

              }}
              value={destination}
              onChange={handleDestinationChange}
              className=' bg-[#eee] px-12 text-base py-2 rounded-lg mt-3 w-full' type="text" placeholder='Enter your destination' />
          </form>
          <button className='bg-black text-white text-lg font-semibold py-2 rounded-lg mt-3 w-full' 
          onClick={findTrip}>
            Find trip
          </button>
        </div>
        <div ref={panelRef} className='bg-white'>
          <LocationSearchPanel activeState={activeState} setDestination={setDestination} setPickup={setPickup} suggestion = {activeState === 'pickup' ? pickupSuggestions : destinationSuggestions }/>
        </div>
      </div>

      <VehiclePanel vehiclePannelref={vehiclePannelref} setVehiclePannelOpen={setVehiclePannelOpen} setConfirmRidePanel={setConfirmRidePanel} fare={fare} setVehicleType={setVehicleType} 
      setmap={setmap}/>
      <ConfirmRide confirmRideref={confirmRideref} setConfirmRidePanel={setConfirmRidePanel} setvehicleFound={setvehicleFound} destination={destination} pickup={pickup} fare={fare} vehicleType={vehicleType} createRide={createRide} confirmRidePanel={confirmRidePanel} setmap={setmap}/>
      <LookingForDriver vehicleFoundRef={vehicleFoundRef} setvehicleFound={setvehicleFound} destination={destination} pickup={pickup} fare={fare} vehicleType={vehicleType} vehicleFound={vehicleFound} setmap={setmap}/>
      <WaitingForDriver waitingForDriverRef={waitingForDriverRef} setwaitingForDriver={setwaitingForDriver} ride={ride} setmap={setmap}/>
    </div>
  )
}

export default UserHome