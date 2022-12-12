import Image from "next/image"
import  {navLinks} from "../constants/index"
import {useState} from 'react';



export const Navbar = () => {
   const [toggle, setToggle] = useState(false);
 return (
<nav className="w-full flex py-6 justify-between items-center navbar">
   <Image
    src="/assets/Logo.png" alt="logo"  width = {150} height ={150} />
   
  <ul className = 'list-none sm:flex hidden justify-end items-center flex-1'>
   {navLinks.map((nav,index) =>(
      <li
      key={nav.id}
      className={`font-outfit font-normal cursor-pointer text-[16px] ${index == navLinks.Length - 1 ? 'mr-0' : 'mr-10' } text-white`}>
         <a href={`#${nav.id}`}>
            {nav.title}
         </a>
      </li>
   ))}
  </ul>
  <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image src= {toggle ? "/assets/close.svg":"/assets/menu.svg"}
        alt="menu"
        width = {28} height = {28}
        onClick={() => setToggle((prev) => !prev )}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex justify-end items-center flex-1 flex-col'>
        {navLinks.map((nav,index)=>(
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.Length - 1 ? 'mb-0' : 'mb-4' } text-white`}
              >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>

              </li>
        ))}
      
      </ul>
        </div>

      </div>
</nav>
  )
}


