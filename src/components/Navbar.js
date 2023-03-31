import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav'>
      <Link className='link' to='/'><h2>LOGO</h2></Link>
      <ul>
        <li><Link className='link' to='/'>Home</Link></li>
        <li><Link className='link' to='/about'>About</Link></li>
        <li><Link className='link' to='/products/list'>Products</Link></li>
      </ul>

    </div>
  )
}
