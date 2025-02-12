import { React ,useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import Start from './pages/Start'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import UserHome from './pages/UserHome'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'


function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin/>}/>
      <Route path='/riding' element={<Riding/>}/>
      <Route path="/signup" element={<UserSignUp/>}/>
      <Route path="/captain-login" element={<CaptainLogin/>}/>
      <Route path="/captain-signup" element={<CaptainSignUp/>}/>
      <Route path='/home' element={<UserProtectedWrapper><UserHome/></UserProtectedWrapper>}/>
      <Route path='/user/logout' element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>}/>
      <Route path='/captain-home' element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>}/> 
      <Route path='/captain/logout' element={<CaptainProtectedWrapper><CaptainLogout/></CaptainProtectedWrapper>}/>
    </Routes>
    </div>
  )
}

export default App
