import React, { useState } from 'react'
import Button from './Button'

const Joke = () => {
    const [joke,setJoke] = useState('')
    const fetchJoke = () => {
        console.log('CLI')
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single").then((res)=> res.json()).then((data)=> setJoke(data.joke))
    }
  return (
    <div className='joke-container'>
        <Button fetchJoke={fetchJoke}/>
        <p className='joke'>{joke}</p>
    </div>
  )
}

export default Joke