import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
            
                <h5 onClick={() => { props.setRidePopuUpPannel(false) }}
                    className='p-3 text-center absolute top-0 right-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
                <h4 className='text-xl font-semibold pt-2'>New Ride Available !</h4>

                <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center '>
                        <img className=' h-12 rounded-full object-cover w-12 mr-4' src="https://imgs.search.brave.com/CHlckebbgI34vLw8RrtSTfNzm_qIp5HBqWSNZiR3yA8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzc1Lzc4Lzc3/LzM2MF9GXzY3NTc4/Nzc1N196cDBmV2Vy/Qnc3em1HN290cktO/QzhXVXFyOTk2ODFR/Ty5qcGc" />
                        <h2 className='text-lg font-medium '>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                    </div>
                    <h5 className='text-lg font-medium '> <i className="mr-1 text-xl ri-pin-distance-line"></i>2.2 KM</h5>
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
               <div className='flex justify-evenly p-4'>
                    <button onClick={()=>{
                               props.setConfirmRidePopUpPannel(true)
                               props.setRidePopuUpPannel(false)
                               props.confirmRide()
                              }}
                            className='bg-green-500 rounded-xl text-lg font-semibold p-1 w-[30%] '>Accept</button>
           
                    <button onClick={()=>{
                         props.setRidePopuUpPannel(false)
                     }}
                        className='bg-gray-300  text-gray-700 rounded-xl text-lg font-semibold p-1 w-[30%] '>Ignore</button>  
              </div>
            </div>
  )
}

export default RidePopUp