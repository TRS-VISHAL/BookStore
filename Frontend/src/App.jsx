import Navbar from './Components/Navbar'
import "./Components/Home.css"
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Freebooks from './Components/Freebooks'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import Courses from './Components/Courses'
import Signup from './Components/Signup'
import CoursesCall from './Components/CoursesCall'
function App() {
  
  return (
    <>
  
<div className=' dark:bg-slate-900 dark:text-white'>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Home/> } />
  <Route path='/courses' element={<CoursesCall/>}/>
  <Route path='/signup' element={<Signup/>}/>
  
</Routes>

</BrowserRouter>
</div>
    </>
  )
}

export default App
