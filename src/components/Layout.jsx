import React from 'react'
import { GoBackButton } from './GoBackButton'

const Layout = ({ children }) => {
  return (
    <>
      <header className='mainHeader'>
        <GoBackButton />
        <h1>Weather App</h1>
      </header>
      <div className='mainContainer'>
        {children}
      </div>
    </>
  )
}

export default Layout