import React, { useState } from 'react'
// import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
function Courses() {

  const [book,setbook] = useState([]);
  useEffect(()=>{
const getBook = async() =>{
try {
  const res = await axios.get("http://localhost:4001/book");
  console.log(res.data);
  setbook(res.data);
} catch (error) {
  console.log(error);
}
}
getBook();
  },[])

  // console.log(list)
  return (
  
<>
 <div className='max-w-screen-2xl py-28 md:py-49 container mx-auto md:px-20 px-5  dark:bg-slate-900 dark:text-white'>
  <div className='justify-center   justify-items-center text-center align-item-center  dark:bg-slate-900 dark:text-white'>
  <h1 className='text-2xl md:text-4xl dark:bg-slate-900 dark:text-white'>
We're delighted to have you <span className='text-pink-500'> 
  Here! :)
</span>
  </h1>
  <p className='mt-12 mb-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, tempora earum? Accusantium, vel earum, facilis commodi ipsa est natus soluta voluptates ab sed officia quasi? Rem earum laborum assumenda porro!</p>
<Link to='/'>
<button className='   bg-pink-500 rounded-md text-white py-2 px-4 hover:bg-pink-700 mb-10'>Back</button>

</Link>  </div>
<div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
{
  book.map((item, index) => (
    <Cards key={item.id} item={item} name="vishal" />
  ))
 
}
</div>
 </div>

 

</>
  )
}

export default Courses