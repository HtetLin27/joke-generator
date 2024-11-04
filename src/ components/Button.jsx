import React from 'react'

const Button = ({fetchJoke}) => {
    console.log(fetchJoke)
  return (
    <button className='btn' onClick={fetchJoke}>
        Click to generate a joke
    </button>
  )
}

export default Button