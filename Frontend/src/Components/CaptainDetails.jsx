import React, { useContext } from 'react'
import {CaptainDataContext} from '../context/CaptainContext'


const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext)

  return (
    <div>
        
        <div className='flex items-center justify-between w-full'>
            <div className='flex items-center justify-start gap-3'>
                <img className='h-10 w-10 rounded-full object-cov' src="https://imgs.search.brave.com/CHlckebbgI34vLw8RrtSTfNzm_qIp5HBqWSNZiR3yA8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzc1Lzc4Lzc3/LzM2MF9GXzY3NTc4/Nzc1N196cDBmV2Vy/Qnc3em1HN290cktO/QzhXVXFyOTk2ODFR/Ty5qcGc" />
                <h4 className='text-lg font-medium capitalize'>{captain?.fullname.firstname + " " + captain?.fullname.lastname}</h4>
            </div>
            <div>
              <h4 className='text-xl font-semibold'>₹294.20</h4>
              <p className='text-sm text-gray-600'>Earned</p>
            </div>
        </div>
        <div className='flex justify-center gap-5 p-3 mt-3 bg-gray-100 rounded-xl items-start'>
          <div className='text-center'>
              <i className='ri-timer-2-line text-3xl font-thin'></i>
              <h5 className='texty-lg font-medium'>₹10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div>
              <i className='ri-speed-up-line text-3xl font-thin'></i>
              <h5 className='texty-lg font-medium'>₹10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div>
               <i className='ri-booklet-line text-3xl font-thin'></i>
               <h5 className='texty-lg font-medium'>₹10.2</h5>
               <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
      </div>
  )
}

export default CaptainDetails