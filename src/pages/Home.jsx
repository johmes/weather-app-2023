import React from 'react'
import { Link } from 'react-router-dom'
import { cities } from '../cities.js'

const Home = () => {
  return (
    <>
      <h1>Select location</h1>
      <div className='buttonContainer'>
        {
          // Map cities to buttons on the home page
          cities && Object.keys(cities).map((city, index) => {
            return (
              <Link
                to={`/oneDay/${city}`}
                key={index}
                className='cityButton'
              >
                {city}
              </Link>
            )
          })
        }
      </div></>
  )
}

export default Home