import React from 'react'
import { Link, Outlet } from 'react-router-dom'




export default function Products() {
  return (
    <>
    <h1 style={{margin:'30px 0'}}>products page</h1>
    <div className='list'>
      <Link className='button' to='list'>List</Link>
      <Link className='button' to='add-product'>Add</Link>
      <Link className='button' to='search'>Search</Link>
    </div>
    <Outlet />
   
    
    </>
  )
}
