import Image from "next/image"
import  {navLinks} from "../constants/index"
import {useState} from 'react';
import Link from 'next/Link';
import { useRouter } from 'next/router';



export const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.asPath;
   const [toggle, setToggle] = useState(false);
   console.log(currentRoute === `/${navLinks[1]["id"]}`)
 return (
<nav className="w-full flex py-6 justify-between items-center navbar">
  <Link href= {`/`}>
  <Image src="/assets/Logo.png" alt="logo"  width = {150} height ={150} />
  </Link>
   
   
  <ul className = 'list-none sm:flex hidden justify-end items-center flex-1'>
  
      <li key={navLinks[0]["id"]} className={`font-outfit font-normal cursor-pointer text-[16px] mr-10 ${currentRoute === `/${navLinks[0]["id"]}` ? 'underline' : 'no-underline'} text-white `}>
         <Link href={`/${navLinks[0]["id"]}`} >
        
         
            
              {navLinks[0]["title"]}
     
        
         </Link>
        
      </li>
      <li key={navLinks[1]["id"]} className={`font-outfit font-normal cursor-pointer text-[16px] mr-10  ${currentRoute === `/${navLinks[1]["id"]}` ? 'underline' : 'no-underline'} text-white `}>
         <Link href={`/${navLinks[1]["id"]}`} >
    
              {navLinks[1]["title"]}
           
        
         </Link>
        
      </li>

      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? '/assets/close.svg':'/assets/menu.svg'}
        alt="menu"
        className="w-[28px] h-[28px]"
        onClick={() => setToggle((prev) => !prev )}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex justify-end items-center flex-1 flex-col'>
        {navLinks.map((nav,index)=>(
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.Length - 1 ? 'mb-0' : 'mb-4' } text-white`}
              >
                  <a href={`/${nav.id}`}>
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


