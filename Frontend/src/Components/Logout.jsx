import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
     const [authUser,setAuthUser]=useAuth();

     const handleLogout=()=>{
try {
setAuthUser({
     ...authUser,
     user:null,
     
})
localStorage.removeItem("Users")
toast.success("Logout successful")

setTimeout(()=>{
     window.location.reload();
   },500)    
} catch (error) {
     console.error(error)
     toast.error("Error while logging out")
}
     }

  return (
    <>
    <button onClick={handleLogout} className='px-3 py-2 bg-red-500 rounded-md text-white'>
     Logout
    </button>
    </>
  )
}

export default Logout