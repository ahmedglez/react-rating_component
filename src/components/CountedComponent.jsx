import React from 'react'

const CountedComponent = ({number}) => {
  return (
    <div className='counted'>
    <h3 >You selected <span>{number}</span> out of <span>5</span></h3>
    </div>
  )
}

export default CountedComponent