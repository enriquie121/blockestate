import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-secondary' >
      <div className='nav-container'>
        <div className='flex space-x-6'>
          <div className='flex'>
            <img width="48px" height="30.19px" src="/logo.svg" alt="BlockEstate" />
            <a className='nav-link text-[24px] ml-4'>BlockEstate</a>
          </div>
          <div className='hidden md:flex'>
            <a className='nav-link'>Buy</a>
            <a className='nav-link'>Sell</a>
            <a className='nav-link'>Agents</a>
            <a className='nav-link'>Contact</a>
            <a className='nav-link'>Blog</a>
            <a className='nav-link'>About</a>
          </div>
        </div>
        <div className='hidden md:block' py-3>
          <div className='flex items-center space-x-4'>
          
            <a className='nav-btn'>
              <p className='text-black'>Get started</p>
              <img src='/icons/arrow.svg' alt='arrow' />
            </a>
          </div>
        </div>
        <button className='block p-2 rounded hover:bg-black/25 md:hidden' onClick={() => setOpen(true)}>
          <img src='/icons/menu.svg' alt='menu' />
        </button>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`
      md:hidden
      fixed inset-0 flex justify-center items-start transition-colors z-40
      ${open ? "visible bg-black/20" : "invisible"}
      `}
      >
        {/* modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
        bg-primary w-11/12 rounded-md shadow p-6 mt-9 transition-all
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute p-1 rounded-lg top-4 right-4 text-gray-40 hover:bg-gray-50 hover:text-gray-600"
          >
            <img src='/icons/cross.svg' alt='close' />
          </button>
          <div className='p-4 divide-y divide-gray-dark'>
            <div>
              <a className="nav-link-responsive"><div className="contents"><div className="nav-link-content">Buy</div></div></a>
              <a className="nav-link-responsive"><div className="contents"><div className="nav-link-content">Sell</div></div></a>
              <a className="nav-link-responsive"><div className="contents"><div className="nav-link-content">Agents</div></div></a>
              <a className="nav-link-responsive"><div className="contents"><div className="nav-link-content">Contact</div></div></a>
              <a className="nav-link-responsive"><div className="contents"><div className="nav-link-content">Blog</div></div></a>
              <a className="nav-link-responsive"><div className="contents"><div className="nav-link-content">About</div></div></a>
            </div>
            <div className='flex flex-col items-center gap-4 pt-8'>
            <a className="relative flex items-center gap-2 text-sm font-medium transition-all cursor-pointer w-11 base-clickable text-ink hover:text-muted" href="/login"><div className="contents"><div className="flex items-center justify-center transition-all pointer-events-none">Login</div></div></a>
              <a className='nav-btn'>
              <div className='flex items-center justify-center transition-all pointer-events-none'>Sign up</div>
                <img src='/icons/arrow.svg' alt='arrow' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar