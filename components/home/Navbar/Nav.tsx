"use client"
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
  openNav: () => void;
}

export const Nav = ({ openNav }: Props) => {
  const [navBg, setnavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setnavBg(true)
      if (window.scrollY < 90) setnavBg(false)
    }
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    }
  }, [])

  return (
    <div className={`fixed ${navBg ? 'bg-gray-800' : ''} h-[10vh] z-[100] w-full transition-all duration-200`}>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <div className=' md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col'>
            <FaHouse />
          </div>
          <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>
            HomeHub
          </h1>
        </div>

        {/* Nav Links */}
        <div className='lg:flex items-center space-x-14 text-white hidden'>
          {navLinks.map((nav) => {
            return <Link key={nav.id} href={nav.url}>
              <p className='font-medium hover:text-yellow-300'>
                {nav.label}
              </p>
            </Link>
          })}
        </div>
        {/* login & menu */}
        <div className='flex items-center space-x-4'>
          {/* login btn */}
          <div className='flex items-center cursor-pointer text-white space-x-2 hover:text-red-400 transition-all duration-200'>
            <FaUserCircle className='h-5 w-5' />
            <p className='font-bold text-xs sm:text-base'>
              Login / Register
            </p>
          </div>
          {/* Menu */}
          <HiBars3BottomRight onClick={openNav} className='sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white lg:hidden' />
        </div>
      </div>
    </div>
  )
}
