import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'


const LocationSearchPanel = (props) => {
  
  if (props.suggestion.length === 0) {
    return (
        <div className='flex justify-center items-center h-full p-4 w-screen'>
        <h2 className='text-2xl  font-medium'>No location found please enter at least three letters to search location</h2>
        </div>
    )
  }

  const locationset = (elem)=>{

    if(props.activeState === 'pickup'){
      props.setPickup(elem.target.innerText)
    }
    if(props.activeState === 'destination'){
      props.setDestination(elem.target.innerText)
    }

  }

  return (
    <div className='flex flex-col m-auto items-center w-[90%]'>
      {props.suggestion.map((elem, idx) => {
        return (
          <div key={idx}
            className='flex items-center my-4 justify-start w-full'>
            <h2 className='p-2 mr-1 rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
            <h4 className='font-medium active:text-blue-500' onClick={locationset}>{elem}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default LocationSearchPanel