import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const [OTP, setOTP] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
    }

    return (
        <div className='h-screen'>

            <h5 onClick={() => { props.setConfirmRidePopUpPannel(false) }}
                className='p-3 text-center absolute top-0 right-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
            <h4 className='text-xl font-semibold pt-2'>Confirm this ride to start</h4>

            <div className='flex items-center justify-between mt-7'>
                <div className='flex items-center '>
                    <img className=' h-12 rounded-full object-cover w-12 mr-4' src="https://imgs.search.brave.com/CHlckebbgI34vLw8RrtSTfNzm_qIp5HBqWSNZiR3yA8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzc1Lzc4Lzc3/LzM2MF9GXzY3NTc4/Nzc1N196cDBmV2Vy/Qnc3em1HN290cktO/QzhXVXFyOTk2ODFR/Ty5qcGc" />
                    <h2 className='text-lg font-medium '>Harsh Patel</h2>
                </div>
                <h5 className='text-lg font-medium '> <i className="mr-1 text-xl ri-pin-distance-line"></i>2.2 KM</h5>
            </div>

            <div className='p-3 flex flex-col gap-3'>
                <div className='flex items-center  border-gray-300 border-b-3'>
                    <h4 className='w-[15%]'>
                        <i className="ri-map-pin-range-fill text-2xl"></i>
                    </h4>
                    <div className='flex flex-col w-[80%]'>
                        <h5 className='text-xl font-bold'>562/11-A</h5>
                        <p className='text-lg  text-gray-600'>Rajiv Chauk , Delhi</p>
                    </div>
                </div>
                <div className='flex items-center  border-gray-300 border-b-3'>
                    <h4 className='w-[15%]'>
                        <i className="ri-square-fill text-2xl"></i>
                    </h4>
                    <div className='flex flex-col w-[80%]'>
                        <h5 className='text-xl font-bold'>Third Cafe Cofee</h5>
                        <p className='text-lg text-gray-600 '>Jeeevan Palace Chauk , Delhi</p>
                    </div>
                </div>
                <div className='flex items-center border-gray-300 border-b-3'>
                    <h4 className='w-[15%]'>
                        <i className="ri-cash-line text-2xl"></i>
                    </h4>
                    <div className='flex flex-col w-[80%]'>
                        <h5 className='text-xl font-bold'>₹193.20</h5>
                        <p className='text-lg  text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>
            <div >
                <form className='flex flex-col items-center justify-evenly px-6 py-4 gap-5 pb-2 mt-4' onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <input className=' bg-[#eee] px-12 text-lg font-mono py-2 rounded-lg mt-3 w-full border-2 border-blue-500 ' type="number" placeholder='Enter OTP' value={OTP} onChange={(e)=>setOTP(e.target.value)} />
                    <Link to={'/captain-riding'} className='bg-green-500 rounded-xl text-lg font-semibold p-2 w-full flex justify-center items-center'>Confirm button</Link>

                    <button onClick={() => {
                        props.setConfirmRidePopUpPannel(false)
                    }}
                        className='bg-red-500  text-white rounded-xl text-lg font-semibold p-2 w-full '>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp