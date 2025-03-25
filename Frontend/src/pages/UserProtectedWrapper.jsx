import React ,{useContext, useEffect,useState} from 'react'
import {UserDataContext} from '../context/userContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const UserProtectedWrapper = ({children}) => {
    const {setuser } = useContext(UserDataContext)
    const [isLoading, setisLoading] = useState(true)
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {   
        if (!token) {
            navigate('/login')
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      }).then(response => {
          if (response.status === 200) {
            setuser(response.data)
            setisLoading(false)
          }
      }).catch(err => {
              localStorage.removeItem('token')
              navigate('/login')
          })
    }, [token])

    if (isLoading) {
      return (
          <div>Loading...</div>
      )
  }
    
  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper