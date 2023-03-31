import React from 'react'
import { useParams } from 'react-router-dom'

export default function Deatils() {
    const {id} = useParams()
  return (
    <div className='cart'>
      <h1>{id}</h1>
      <button className='button-2'>add to cart</button>
    </div>
  )
}
