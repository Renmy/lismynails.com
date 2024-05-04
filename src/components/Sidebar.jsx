import { Transition } from '@headlessui/react'
import menuClose from "../images/icons/menu-close.svg"
import nav_insta from '../images/icons/instagram.svg';
import nav_whatsapp from '../images/icons/whatsapp1.svg';
import nav_tel from '../images/icons/phone.svg';

export default function Sidebar({ openMenu = false, setOpenMenu }) {
  return (
    /* The `show` prop controls all nested `Transition.Child` components. */
    <Transition show={ openMenu }>
    {/* Background overlay */}
    <Transition.Child
      enter="transition-opacity ease-linear duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="h-full w-full fixed bg-black opacity-80 z-20 inset-0" onClick={ () => setOpenMenu(false) }></div>
    </Transition.Child>

    {/* Sliding sidebar */}
    <Transition.Child
      className="fixed right-0 top-0 h-screen z-30 w-[250px]"
      enter="transition ease-in-out duration-300 transform"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <div className="fixed right-0 top-0 h-screen bg-slate-100 pt-20 p-8 z-50 w-[250px]">
        <button onClick={ () => setOpenMenu(false)} >
          <img src={menuClose.src} alt="menu close icon" className="absolute top-3 right-3" />
        </button>
        <ul className="flex flex-col gap-3 text-xl text-pink-500">
          <li>
            <a href='#services' onClick={ () => setOpenMenu(false)}>Servicios</a>
          </li>
          <li>
            <a href='#about-me'onClick={ () => setOpenMenu(false)}>Quién es Lis</a>
          </li>
          <li>
            <a href='#galery'onClick={ () => setOpenMenu(false)}>Galeria</a>
          </li>
          <li>
            <a href='#contact'onClick={ () => setOpenMenu(false)}>Contacto</a>
          </li>
        </ul>
        <hr class="h-px my-8 bg-pink-500 border-0 "></hr>
        
        <ul className="flex gap-3 w-full items-center justify-between px-8 ">
            <a href="https://www.instagram.com/lismynails/" target='_blank'>
                <img src={nav_insta.src} alt="instagram" className="my-1 scale-125" />    
            </a>    
            <a href="http://wa.me/19544775261" target='_blank'>
                <img src={nav_whatsapp.src}  alt="whatsapp" className="my-1 scale-125" />    
            </a>    
            <a href="tel:9544775261" target='_blank'>
                <img src={nav_tel.src}  alt="telephone" className="my-1 scale-125" />    
            </a>    
        </ul>
      </div>
    </Transition.Child>
  </Transition>
  )
}

