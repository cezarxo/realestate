import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/constant/constant'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

export const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : "translate-x-[-100%]"
  return (
    <div>
      {/* overlay */}
      <div className={` ${navOpen} transform fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}>
      </div>
        {/* nav links */}
        <div className={` ${navOpen} text-white transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}>
          {navLinks.map((nav) => {
            return <Link key={nav.id} href={nav.url}>
              <p className='text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text[30px] font-medium hover:text-yellow-300'>
                {nav.label}
              </p>
            </Link>
          })}

          <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white' />
        </div>

     
    </div>
  )
}
