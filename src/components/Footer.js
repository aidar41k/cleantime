import React from 'react'
import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='bg-green-600 min-h-[450px] md:min-h-[250px] px-2'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between items-center gap-y-5 py-16 md:py-8'>
          <div className='flex gap-1 items-center text-xl  md:text-2xl md:pt-16 lg:text-3xl font-bold'>
            <a href={'/'}>
              <span className='italic text-white'>Clean </span>
              <span className='italic text-white'>Time</span>
            </a>
          </div>
          <div className='flex flex-col md:flex-row md:pt-16 gap-6 tracking-wider text-white text-center'>
            <a href={'/'} className='hover:text-gray-800 hover:translate-y-1 duration-300'>
              Главная
            </a>
            <a href={'#services'} className='hover:text-gray-800 hover:translate-y-1 duration-300'>
              Наши услуги
            </a>
            <a href={'#fag'} className='hover:text-gray-800 hover:translate-y-1 duration-300'>
              Частые Вопросы
            </a>
          </div>
          <div className='flex  gap-x-5 items-center md:pt-16 '>
            <a href='tel: +996703156975'>
              <AiOutlinePhone
                size={25}
                className='text-white hover:text-gray-800 hover:translate-y-1 duration-300'
              />
            </a>
            <a href='https://wa.me/+996703156975' target='_blank'>
              <AiOutlineWhatsApp
                size={25}
                className='text-white hover:text-gray-800 hover:translate-y-1 duration-300'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
