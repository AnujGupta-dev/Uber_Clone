import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FinishRide from '../Components/FinishRide';

const Captainriding = () => {
    const [finsihRidepannel, setFinsihRidepannel] = useState(false)
    const finsihRidepannelRef = useRef(null)

    useGSAP(()=>{
        if(finsihRidepannel){
           gsap.to(finsihRidepannelRef.current,{
             transform :'translateY(0)'
           })
        }else{
           gsap.to(finsihRidepannelRef.current,{
             transform :'translateY(100%)'
           })
        }
     
       },[finsihRidepannel])

  return (
    <div className='h-screen overflow-hidden'>
    <div>
      <img className='w-16 absolute left-5 top-5' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png" />

      <Link to={'/captain-home'} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className='ri-logout-box-r-line text-lg font-medium'></i>
      </Link>
    </div>
    <div className='h-4/5'>
      {/* temp image */}
      <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"  />
    </div>
    <div className='h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative' onClick={() => setFinsihRidepannel(true)}>  
            <h5 className='p-3 text-center absolute -top-2 w-[95%] text-3xl'><i className="ri-arrow-down-wide-line"></i></h5>
            <h4 className='text-xl font-semi'>4 Km away</h4>
            <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
    </div>
    <div ref={finsihRidepannelRef} className='fixed w-full z-10 bottom-0 pl-3 bg-white flex flex-col gap-2 translate-y-full'>
        <FinishRide setFinsihRidepannel={setFinsihRidepannel}/>
     </div>
    </div>
  )
}

export default Captainriding