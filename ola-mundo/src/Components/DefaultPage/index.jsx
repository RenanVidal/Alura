import Banner from 'Components/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DefaultPage({children}) {
  return (
        <main>
            <Banner />
            <Outlet />
            {children}
        </main>
  )
}
