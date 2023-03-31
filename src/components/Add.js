import React from 'react'

export default function Add() {
  return (
    <div>
      <h1>add new product</h1>
      <div className='form'>
        <input type='text' placeholder='Product' />
        <input type='text' placeholder='Price' />
        <input type='text' placeholder='description' />
        <button>add</button>
      </div>
    </div>
  )
}
