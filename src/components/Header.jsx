import React from 'react'
import nav_insta from '../images/icons/instagram.svg'
import nav_whatsapp from '../images/icons/whatsapp1.svg'
import nav_tel from '../images/icons/phone.svg'
import nailogo from '../images/icons/nailogo.svg'
import '../styles/header.css'
import '@fontsource/love-light';



export default function Header() {
  return (
    <header className='relative py-2 mx-auto z-20 flex flex-row  lg:w-3/5 lg:rounded-b-xl shadow-lg shadow-gray-500 bg-slate-50 '>
        <div className="logo w-1/2 flex items-center px-4 space-x-1">
            <h1 className="text-pink-500 text-3xl  tracking-wider">Lismy Nails</h1>
            <img src={nailogo.src} alt="nail bottle" className='h-8 scale-125' />
        </div>
        <nav className="text-white hidden lg:flex lg:flex-grow lg:items-center lg:text-center lg:justify-center w-2/3 space-x-4">
            <a className="hover:scale-105" href="/">Servicios</a>   
            <a className="hover:scale-105" href="/">Quien es Lis</a>   
            <a className="hover:scale-105" href="/">Blog</a>    
            <a className="hover:scale-105" href="/">Contacto</a>  
        </nav> 
        <span className="border border-pink-400"></span> 
        <div className="px-4 flex flex-col items-center justify-center w-1/2 lg:w-1/4 space-y-2">
            <nav className="flex flex-row gap-3 lg:gap-4 pb-1">
                <a className="hover:scale-110" href="/">
                    <img src={nav_insta.src} alt="instagram" class="mb-1" />    
                </a>    
                <a className="hover:scale-110" href="/">
                    <img src={nav_whatsapp.src}  alt="whatsapp" className="mb-1" />    
                </a>    
                <a className="hover:scale-110" href="/">
                    <img src={nav_tel.src}  alt="telephone" className="mb-1" />    
                </a>    
            </nav>
        </div> 
    </header>
  )
}




