import React, { useRef, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../Components/LocationSearchPanel';
import VehiclePanel from '../Components/VehiclePanel';
import ConfirmRide from '../Components/ConfirmRide';
import WaitingForDriver from '../Components/WaitingForDriver';
import LookingForDriver from '../Components/LookingForDriver';

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

  const submitHandler = (e) => {
    e.preventDefault()
  }
  
  useGSAP(()=>{
      if(panelOpen){
        gsap.to(panelRef.current, { 
          height:'70%',
        })
        gsap.to(panelCloserref.current, {
          opacity:1
        })
      }else{
        gsap.to(panelRef.current, { 
          height:'0%',
        })
        gsap.to(panelCloserref.current, {
          opacity:0
        })
      }
  },[panelOpen])

  useGSAP(()=>{
   if(vehiclePannelOpen){
      gsap.to(vehiclePannelref.current,{
        transform :'translateY(0)'
      })
   }else{
      gsap.to(vehiclePannelref.current,{
        transform :'translateY(100%)'
      })
   }

  },[vehiclePannelOpen])

  useGSAP(()=>{
    if(confirmRidePanel){
       gsap.to(confirmRideref.current,{
         transform :'translateY(0)'
       })
    }else{
       gsap.to(confirmRideref.current,{
         transform :'translateY(100%)'
       })
    }
 
   },[confirmRidePanel])

   useGSAP(()=>{
    if(vehicleFound){
       gsap.to(vehicleFoundRef.current,{
         transform :'translateY(0)'
       })
    }else{
       gsap.to(vehicleFoundRef.current,{
         transform :'translateY(100%)'
       })
    }
 
   },[vehicleFound])

   useGSAP(()=>{
    if(waitingForDriver){
       gsap.to(waitingForDriverRef.current,{
         transform :'translateY(0)'
       })
    }else{
       gsap.to(waitingForDriverRef.current,{
         transform :'translateY(100%)'
       })
    }
 
   },[waitingForDriver])
  
  return (
    <div className='h-screen relative overflow-hidden'>
        <img className='w-16 absolute left-5 top-5' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png"  />

        <div className='h-screen w-screen '>
          {/* temp image */}
          <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>

        <div className='flex flex-col justify-end h-screen absolute top-0 w-full  '>
          <div className='h-[30%] bg-white p-5 relative'>
            <h5 ref={panelCloserref}
            onClick={() => setpanelOpen(false)}
            className='absolute opacity-0 top-6 right-6 text-2xl'>
              <i className="ri-arrow-down-wide-fill"></i>
            </h5>
            <h4 className='text-2xl font-semibold '>Find a trip</h4>
            <form onSubmit={(e) => submitHandler()}>
              <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
              <input 
              onClick={() => setpanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className=' bg-[#eee] px-12 text-base py-2 rounded-lg mt-5 w-full 'type="text" placeholder='Add a pick-up location' />
              <input 
              onClick={() => setpanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className=' bg-[#eee] px-12 text-base py-2 rounded-lg mt-3 w-full'type="text" placeholder='Enter your destination' />
            </form>
          </div>
          <div ref={panelRef} className='bg-white'>
                <LocationSearchPanel  setVehiclePannelOpen={setVehiclePannelOpen} setpanelOpen={setpanelOpen}/>
          </div>
        </div>
        
        <VehiclePanel vehiclePannelref={vehiclePannelref} setVehiclePannelOpen={setVehiclePannelOpen} setConfirmRidePanel={setConfirmRidePanel}/>
        <ConfirmRide confirmRideref={confirmRideref} setConfirmRidePanel={setConfirmRidePanel} setvehicleFound={setvehicleFound}/>
        <LookingForDriver vehicleFoundRef={vehicleFoundRef} setvehicleFound={setvehicleFound}/>
        <WaitingForDriver waitingForDriverRef={waitingForDriverRef} setwaitingForDriver={setwaitingForDriver}/>
    </div>
  )
}

export default UserHome