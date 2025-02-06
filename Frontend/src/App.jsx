import { React ,useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import Start from './pages/Start'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'


function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin/>}/>
      <Route path="/signup" element={<UserSignUp/>}/>
      <Route path="/captain-login" element={<CaptainLogin/>}/>
      <Route path="/captain-signup" element={<CaptainSignUp/>}/>
      <Route path='/home' element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
      <Route path='/user/logout' element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>}/>
      <Route path='/captain-home' element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>}/> 
    </Routes>
    </div>
  )
}

export default App
