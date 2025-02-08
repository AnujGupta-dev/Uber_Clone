import React from 'react'
import 'remixicon/fonts/remixicon.css'


const LocationSearchPanel = ({setpanelOpen ,setVehiclePannelOpen}) => {

    //sample for array 
    const location =[
        "Lorem ipsum dollorem4 Lorem ipsum dolor sit.or sit.",
        "Lorem ipsum wfwef Lorem ipsum dolor sit.or sit.",
        "Lorem ipsum dollorem4 Lorsum dolor sit.or sit.",
        "Lorem ipsum4 Lorem ipsum dolor sit.or sit."
    ]

  return (
    
    <div className='flex flex-col m-auto items-center w-[90%]'>
        {location.map((elem,idx)=>{
            return(
                <div key={idx}
                onClick={()=>{setVehiclePannelOpen(true) 
                                   setpanelOpen(false)}} 
                className='flex items-center my-4 justify-start'>
                <h2 className=' p-2 mr-1 rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
                <h4 className='font-medium active:text-blue-500'>{elem}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default LocationSearchPanel