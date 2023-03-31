import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const products = [
    {id:1, title:'iphone', price:'120'},
    {id:2, title:'sumsung', price:'100'},
    {id:3, title:'oppo', price:'180'},
    {id:4, title:'nokia', price:'130'},
  ]

export default function List() {
  return (
    <div className='products'>
    {products.map(product=>{
      return(
        <div key={product.id} className='product'>
          <h2>{product.title}</h2>
          <p>{product.price}$</p>
          <Link to={product.title} className='button'>details</Link>
        </div>
      )
    })}
  <Outlet/>
  </div>
  )
}
