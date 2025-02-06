import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1682834983265-27a10ba5232c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full flex flex-col  justify-between' >
            <img className='relative w-[4rem] h-2xl top-5 left-4' src="https://imgs.search.brave.com/RraNkq3UVqjUlJytyhL1XghK_6xTCTlVTvpIzg5vClg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy5sb2dvZnVyeS5j/b20vbG9nb19zcmMv/MmVjZjA1ZGE1ZThk/Y2ZhZjQ2ZjY4NDM2/NDY3YjRjYzYucG5n"  />
            <div className='bg-white w-full h-[18%] flex flex-col justify-center p-4 gap-3' > 
                <h2 className='text-2xl font-bold px-3'>Get Started with Uber</h2>
                <Link to={'/login'} className='bg-black text-white border rounded-sm font-[700] tracking-wide p-2 w-full flex justify-center '>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start 