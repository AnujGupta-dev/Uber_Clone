import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopUp from '../Components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../Components/ConfirmRidePopUp'


const CaptainHome = () => {
  
  const [ridePopuUpPannel, setRidePopuUpPannel] = useState(true)
  const [confirmRidePopUpPannel, setConfirmRidePopUpPannel] = useState(false)
  const ridePopuUpPannelRef = useRef(null)
  const confrimridePopuUpPannelRef = useRef(null)

  useGSAP(()=>{
    if(ridePopuUpPannel){
       gsap.to(ridePopuUpPannelRef.current,{
         transform :'translateY(0)'
       })
    }else{
       gsap.to(ridePopuUpPannelRef.current,{
         transform :'translateY(100%)'
       })
    }
 
   },[ridePopuUpPannel])

   useGSAP(()=>{
    if(confirmRidePopUpPannel){
       gsap.to(confrimridePopuUpPannelRef.current,{
         transform :'translateY(0)'
       })
    }else{
       gsap.to(confrimridePopuUpPannelRef.current,{
         transform :'translateY(100%)'
       })
    }
 
   },[confirmRidePopUpPannel])


  return (
    <div className='h-screen overflow-hidden'>
      <div>
        <img className='w-16 absolute left-5 top-5' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png" />

        <Link to={'/capain-home'} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className='ri-logout-box-r-line text-lg font-medium'></i>
        </Link>
      </div>
      <div className='h-4/6'>
        {/* temp image */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"  />
      </div>
      <div className='h-2/6 p-6 flex flex-col items-center '>
          <CaptainDetails/>
      </div>

      <div ref={ridePopuUpPannelRef} className='fixed w-full z-10 bottom-0 pl-3 bg-white flex flex-col gap-2 translate-y-full'>
        <RidePopUp setRidePopuUpPannel={setRidePopuUpPannel} setConfirmRidePopUpPannel={setConfirmRidePopUpPannel}/>
     </div>

     <div ref={confrimridePopuUpPannelRef} className='fixed w-full z-10 bottom-0 pl-3 bg-white flex flex-col gap-2 translate-y-full'>
        <ConfirmRidePopUp setConfirmRidePopUpPannel={setConfirmRidePopUpPannel}/>
     </div>
    </div>
  )
}

export default CaptainHome