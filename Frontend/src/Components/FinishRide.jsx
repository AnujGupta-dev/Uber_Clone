import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const FinishRide = (props) => {
    const navigate = useNavigate()

    const endRide = async () => {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
            rideId: props.ride._id,
          }, {
            headers: {  
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })

            if (response.status === 200) {
                props.setFinsihRidepannel(false)
                navigate('/captain-home')
            }
    }

  return (
    <div className='py-6'>

    <h5 onClick={() => { props.setFinsihRidepannel(false) }}
        className='p-3 text-center absolute top-0 right-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
    <h4 className='text-xl font-semibold pt-2'>Finish this ride to start</h4>

    <div className='flex items-center justify-between mt-7'>
        <div className='flex items-center '>
            <img className=' h-12 rounded-full object-cover w-12 mr-4' src="https://imgs.search.brave.com/CHlckebbgI34vLw8RrtSTfNzm_qIp5HBqWSNZiR3yA8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzc1Lzc4Lzc3/LzM2MF9GXzY3NTc4/Nzc1N196cDBmV2Vy/Qnc3em1HN290cktO/QzhXVXFyOTk2ODFR/Ty5qcGc" />
            <h2 className='text-lg font-medium '>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
        </div>
        <h5 className='text-lg font-medium '> <i className="mr-1 text-xl ri-pin-distance-line"></i>{(props.ride?.distance)/1000} km</h5>
    </div>

    <div className='p-3 flex flex-col gap-3'>
        <div className='flex items-center  border-gray-300 border-b-3'>
            <h4 className='w-[15%]'>
                <i className="ri-map-pin-range-fill text-2xl"></i>
            </h4>
            <div className='flex flex-col w-[80%]'>
                {/* <h5 className='text-xl font-bold'>562/11-A</h5> */}
                <p className='text-lg  text-gray-600'>{props.ride?.pickup}</p>
            </div>
        </div>
        <div className='flex items-center  border-gray-300 border-b-3'>
            <h4 className='w-[15%]'>
                <i className="ri-square-fill text-2xl"></i>
            </h4>
            <div className='flex flex-col w-[80%]'>
                {/* <h5 className='text-xl font-bold'>Third Cafe Cofee</h5> */}
                <p className='text-lg text-gray-600 '>{props.ride?.destination}</p>
            </div>
        </div>
        <div className='flex items-center border-gray-300 border-b-3'>
            <h4 className='w-[15%]'>
                <i className="ri-cash-line text-2xl"></i>
            </h4>
            <div className='flex flex-col w-[80%]'>
                <h5 className='text-xl font-bold'>₹{props.ride?.fare}</h5>
                <p className='text-lg  text-gray-600'>Cash Cash</p>
            </div>
        </div>
    </div>
    <div className='flex flex-col items-center justify-evenly px-6 py-4 gap-5 pb-2 mt-4'>
        <button onClick={endRide} className='bg-green-500 rounded-xl text-lg text-white font-semibold p-2 w-full flex justify-center items-center'>Finish Ride</button>
        <p className='text-red-700 text-xs'>Click on finish ride if reached to destination</p>
    </div>
</div>
  )
}

export default FinishRide