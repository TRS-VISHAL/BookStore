import React from 'react'

function Cards({item ,name}) {
     console.log(item)
  return (
 <>
 {console.log(name)}
 <div className='mt-6 mb-6'>
 <div className="card bg-base-100 w-92 mr-4 ml-4  hover:scale-105 duration-200 gapx-2 dark:border  dark:bg-slate-900 dark:text-white ">
  <figure>     
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between mt-2">
      <div className="badge badge-outline">{item.price}</div>
      <div className="badge badge-outline     hover:bg-pink-500 duration-200 transition-all hover:text-white hover:border-white">Buy Now</div>
    </div>
  </div>
</div>
     </div></>
  )
}

export default Cards