import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <>
         <div className='card-item'>
            <h2>{props.title}</h2>
            <h3><i class={props.icon}></i> {props.value}</h3>
            <hr/>
            <p>{props.description}</p>
         </div>
    </>
  )
}

export default Cards