import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header'

function layout() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default layout