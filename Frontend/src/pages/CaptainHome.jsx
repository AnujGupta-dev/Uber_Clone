import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopUp from '../Components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../Components/ConfirmRidePopUp'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'


const CaptainHome = () => {

  const [ridePopuUpPannel, setRidePopuUpPannel] = useState(false)
  const [confirmRidePopUpPannel, setConfirmRidePopUpPannel] = useState(false)
  const ridePopuUpPannelRef = useRef(null)
  const confrimridePopuUpPannelRef = useRef(null)
  const [ride, setride] = useState(null)

  const { captain } = useContext(CaptainDataContext)
  const { socket } = useContext(SocketContext)

  useEffect(() => {
    socket.emit("join", { userType: "captain", userId: captain?._id })

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

          socket.emit('update-location-captain', {
            userId: captain?._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        })
      }
    }

    setInterval(updateLocation, 10000)
    updateLocation()

  }, [])

  socket.on('new-ride', (data) => {
    setride(data)
    setRidePopuUpPannel(true)
  })

  async function confirmRide() {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {
        rideId: ride._id,
      }, {
        headers: {  
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    }

  useGSAP(() => {
    if (ridePopuUpPannel) {
      gsap.to(ridePopuUpPannelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopuUpPannelRef.current, {
        transform: 'translateY(100%)'
      })
    }

  }, [ridePopuUpPannel])

  useGSAP(() => {
    if (confirmRidePopUpPannel) {
      gsap.to(confrimridePopuUpPannelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confrimridePopuUpPannelRef.current, {
        transform: 'translateY(100%)'
      })
    }

  }, [confirmRidePopUpPannel])


  return (
    <div className='h-screen overflow-hidden'>
      <div>
        <img className='w-16 absolute left-5 top-5' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png" />

        <Link to={'/captain-home'} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className='ri-logout-box-r-line text-lg font-medium'></i>
        </Link>
      </div>
      <div className='h-4/6'>
        {/* temp image */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" />
      </div>
      <div className='h-2/6 p-6 flex flex-col items-center '>
        <CaptainDetails />
      </div>

      <div ref={ridePopuUpPannelRef} className='fixed w-full z-10 bottom-0 pl-3 bg-white flex flex-col gap-2 translate-y-full'>
        <RidePopUp setRidePopuUpPannel={setRidePopuUpPannel} setConfirmRidePopUpPannel={setConfirmRidePopUpPannel} ride={ride} confirmRide={confirmRide} />
      </div>

      <div ref={confrimridePopuUpPannelRef} className='fixed w-full z-10 bottom-0 pl-3 bg-white flex flex-col gap-2 translate-y-full'>
        <ConfirmRidePopUp setConfirmRidePopUpPannel={setConfirmRidePopUpPannel} ride={ride} />
      </div>
    </div>
  )
}

export default CaptainHome