import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout