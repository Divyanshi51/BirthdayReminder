import React from 'react'

export default function List(props) {
  const { image, name, age } = props.person
  return (
    <div className='list'>
      <img src={image} alt={name} className='img' />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </div>
  )
}