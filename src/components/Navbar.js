'use client'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className='fixed bg-white top-0 w-[100%] z-20 shadow-md'>
      <div className='container mx-auto flex justify-between items-center px-4 py-4'>
        <div className='flex gap-1 items-center text-xl  md:text-2xl font-bold'>
          <a href={'/'}>
            <span className='italic'>Clean </span>
            <span className='italic text-green-600'>Time</span>
          </a>
        </div>
        <div className='hidden md:flex justify-around gap-6 tracking-wider text-gray-600'>
          <a href={'/'} className='hover:text-green-700'>
            Главная
          </a>
          <a href={'#services'} className='hover:text-green-700'>
            Наши услуги
          </a>
          <a href={'#fag'} className='hover:text-green-700'>
            Частые Вопросы
          </a>
        </div>
        <div>
          <a
            href='tel: +996703156975'
            className='hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-700 hover:text-white'>
            +996703156975
          </a>
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className='md:hidden block cursor-pointer'
            size={28}
          />
        ) : (
          <FiMenu
            onClick={() => setToggle(!toggle)}
            className='md:hidden block cursor-pointer'
            size={28}
          />
        )}
      </div>
      {/* Responsive menu */}
      <div
        className={`duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top-[60px] 
        ${toggle ? `left-[0]` : `left-[-100%]`}`}>
        <a href={'/'} className='hover:text-green-700 p-5'>
          Главная
        </a>
        <a href={'#services'} className='hover:text-green-700 p-5'>
          Наши услуги
        </a>
        <a href={'#fag'} className='hover:text-green-700 p-5'>
          Частые Вопросы
        </a>

        <div className='flex flex-col gap-5 items-center mt-48'>
          <div className='bg-green-600 w-[250px] h-[1px]'></div>
          <div className='flex gap-8 '>
            <a href='tel: +996703156975'>
              <AiOutlinePhone
                size={25}
                className='text-green-600 hover:translate-y-1 duration-300'
              />
            </a>
            <a href='https://wa.me/+996703156975' target='_blank'>
              <AiOutlineWhatsApp
                size={25}
                className='text-green-600 hover:translate-y-1 duration-300'
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
