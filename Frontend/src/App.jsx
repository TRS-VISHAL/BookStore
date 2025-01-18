import Navbar from './Components/Navbar'
import "./Components/Home.css"
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Freebooks from './Components/Freebooks'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import Courses from './Components/Courses'
import Signup from './Components/Signup'
import CoursesCall from './Components/CoursesCall'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
function App() {
  const [authUser,setAuthUser]=useAuth();
  return (
    <>
  
<div className=' dark:bg-slate-900 dark:text-white'>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Home/> } />
  <Route path='/courses' element={authUser?<CoursesCall/>:<Navigate to="/sinup"/>}/>
  <Route path='/signup' element={<Signup/>}/>
  
</Routes>
<Toaster/>

</BrowserRouter>
</div>
    </>
  )
}

export default App
